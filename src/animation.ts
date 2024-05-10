type AnimationType =
  | 'idle'
  | 'idle2'
  | 'movement'
  | 'catch'
  | 'damage'
  | 'sleep'
  | 'ko'

type SpriteAnimation = {
  frames: number
  loc: Coordinates[]
}

type AnimationStates = Record<AnimationType, SpriteAnimation>

type Coordinates = {
  x: number
  y: number
}

const SPRITE_WIDTH = 16
const SPRITE_HEIGHT = 16

const animations: AnimationStates = {
  idle: {
    frames: 5,
    loc: [],
  },
  idle2: {
    frames: 14,
    loc: [],
  },
  movement: {
    frames: 8,
    loc: [],
  },
  catch: {
    frames: 11,
    loc: [],
  },
  damage: {
    frames: 5,
    loc: [],
  },
  sleep: {
    frames: 6,
    loc: [],
  },
  ko: {
    frames: 7,
    loc: [],
  },
}
