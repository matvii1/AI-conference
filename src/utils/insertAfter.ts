export function insertAfter(el: HTMLElement, htmlString: string) {
  el.insertAdjacentHTML("beforeend", htmlString)
}
