const burger = document.querySelector(".burger") as HTMLDivElement
const navList = document.querySelector(".nav__list") as HTMLUListElement
const body = document.querySelector("body") as HTMLBodyElement
const navClose = document.querySelector(".nav__close") as HTMLElement
const navLinks = document.querySelectorAll(".nav__link") as NodeList

burger.addEventListener("click", () => {
  menuOpen()
})

navClose.addEventListener("click", () => {
  menuClose()
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuClose()
  })
})

function menuOpen() {
  burger.classList.add("burger-active")
  navList.classList.add("nav__list--active")
  body.classList.add("no-scroll")

  document.addEventListener("click", blurClose)
  document.addEventListener("keyup", onKeyPress)
}

function menuClose() {
  burger.classList.remove("burger-active")
  navList.classList.remove("nav__list--active")
  body.classList.remove("no-scroll")

  document.removeEventListener("click", blurClose)
  document.removeEventListener("keyup", onKeyPress)
}

function blurClose(event: MouseEvent) {
  const closestEl = event.target as HTMLElement
  const isMenuOpen = navList.classList.contains("nav__list--active")
  const isButtonClicked = closestEl.closest(".burger")
  const isBlur =
    isMenuOpen && !closestEl.closest(".nav__list") && !isButtonClicked

  if (isBlur) {
    menuClose()
  }
}

function onKeyPress(e: KeyboardEvent) {
  if (e.key === "Escape") {
    menuClose()
  }
}
