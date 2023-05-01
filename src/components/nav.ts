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
}

function menuClose() {
  burger.classList.remove("burger-active")
  navList.classList.remove("nav__list--active")
  body.classList.remove("no-scroll")
}
