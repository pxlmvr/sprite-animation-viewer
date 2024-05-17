import { SPRITE_HEIGHT, SPRITE_WIDTH } from './utils/constants'

type Coordinates = {
  x: number
  y: number
}

export type AnimationType =
  | 'idle'
  | 'jump'
  | 'fall'
  | 'run'
  | 'dizzy'
  | 'sit'
  | 'roll'
  | 'bite'
  | 'ko'
  | 'getHit'

type AnimationState = {
  name: AnimationType
  frames: number
}

type AnimationObject = Record<
  AnimationType,
  {
    frames: number
    loc: Coordinates[]
  }
>

const animationStates: AnimationState[] = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'getHit',
    frames: 4,
  },
]

const animationsBlueprint: { [key: string]: any } = {}

animationStates.forEach((state: AnimationState, idx: number) => {
  const loc: Coordinates[] = []

  for (let i = 0; i < state.frames; i++) {
    const posX = i * SPRITE_WIDTH
    const posY = idx * SPRITE_HEIGHT

    loc.push({ x: posX, y: posY })
  }

  animationsBlueprint[state.name] = {
    frames: state.frames,
    loc,
  }
})

export const animations: AnimationObject = Object.create(animationsBlueprint)
