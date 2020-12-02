type Params = number

export default function slider(node: HTMLElement, _: Params) {
  let progressing = false
  node.addEventListener('mousedown', clickHandler)
  node.addEventListener('mouseup', clickHandler)
  node.addEventListener('touchstart', clickHandler)
  node.addEventListener('touchend', clickHandler)

  function clickHandler() {
    progressing = !progressing
  }
  return {
    update(pageX: Params) {
      if (progressing) {
        const {
          x,
          width: parentWidth,
        } = (node.parentElement as HTMLElement).getBoundingClientRect()
        const { width: nodeWidth } = node.getBoundingClientRect()
        node.style.setProperty(
          '--progress',
          `${Math.min(
            ((parentWidth - nodeWidth) / parentWidth) * 100,
            Math.max(0, ((pageX - x - nodeWidth / 2) / parentWidth) * 100)
          )}%`
        )
      }
    },
  }
}
