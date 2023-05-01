const burger = document.querySelector(".burger") as HTMLDivElement
const navList = document.querySelector(".nav__list") as HTMLUListElement
const body = document.querySelector("body") as HTMLBodyElement

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active")
  navList.classList.toggle("nav__list--active")
  body.classList.toggle("no-scroll")
})
