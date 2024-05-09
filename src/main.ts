import { refreshCanvas } from './utils/refreshCanvas'

const canvas: HTMLCanvasElement = document.querySelector('#output')!
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!

/** Track the current animation frame */
let frameCounter: number = 0

/** Basically how many frames each animation step should last for */
const staggerFrames = 5

const animate: VoidFunction = () => {
  refreshCanvas(ctx)

  frameCounter++
}

animate()
