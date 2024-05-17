import { SPRITE_HEIGHT, SPRITE_WIDTH } from './utils/constants'
import { refreshCanvas } from './utils/refreshCanvas'

import { AnimationType, animations } from './animation'

const canvas: HTMLCanvasElement = document.querySelector('#output')!
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
const userSelect: HTMLSelectElement = document.querySelector('#animations')!

/** Track the current animation frame */
let frameCount: number = 0

/** Basically how many frames each animation step should last for */
const staggerFrames = 5

const sprite: HTMLImageElement = new Image()
sprite.src = '/assets/shadow_dog.png'

let playerState: AnimationType = 'idle'

userSelect.addEventListener('change', (e: Event) => {
  const select = e.target as HTMLSelectElement
  playerState = select.value as AnimationType
})

const animate: VoidFunction = () => {
  refreshCanvas(ctx)

  /**
   * Cycle between sprites in the current row. Each sprite is shown for a number of animation loops
   * equal to staggerFrames value.
   */
  let position =
    Math.floor(frameCount / staggerFrames) % animations[playerState].loc.length
  let frameX = SPRITE_WIDTH * position
  let frameY = animations[playerState].loc[position].y

  ctx.drawImage(
    sprite,
    frameX,
    frameY,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    SPRITE_WIDTH,
    SPRITE_HEIGHT
  )

  frameCount++

  requestAnimationFrame(animate)
}

animate()
