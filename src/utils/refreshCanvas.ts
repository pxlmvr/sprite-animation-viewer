import { CANVAS_SIZE } from './constants'

export const refreshCanvas = (ctx: CanvasRenderingContext2D): void => {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

  ctx.fillStyle = '#FFF'
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
}
