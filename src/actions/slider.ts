import { progress } from '../store/slider'

type Params = number

export default function slider(node: HTMLElement, _: Params) {
  const span = node.querySelector('span') as HTMLSpanElement
  let progressing = false

  span.addEventListener('mousedown', onHandler)
  span.addEventListener('mouseup', offHandler)

  span.addEventListener('touchstart', onHandler)
  span.addEventListener('touchend', offHandler)

  function onHandler() {
    progressing = true
  }

  function offHandler() {
    progressing = false
  }
  return {
    update(pageX: Params) {
      if (progressing) {
        const {
          x,
          width: parentWidth,
        } = (node.parentElement as HTMLElement).getBoundingClientRect()
        const { width: nodeWidth } = node.getBoundingClientRect()
        progress.set(
          Math.min(
            ((parentWidth - nodeWidth) / parentWidth) * 100,
            Math.max(0, ((pageX - x - nodeWidth / 2) / parentWidth) * 100)
          )
        )
      }
    },
  }
}
