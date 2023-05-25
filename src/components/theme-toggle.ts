const switchToggle = document.querySelector(
  ".switch-toggle"
) as HTMLButtonElement
const page = document.querySelector(".page") as HTMLElement

if (isDarkTheme()) {
  page.classList.add("page--theme--dark")
} else {
  page.classList.remove("page--theme--dark")
}

switchToggle.addEventListener("click", () => {
  if (page.classList.contains("page--theme--dark")) {
    page.classList.remove("page--theme--dark")
    localStorage.setItem("theme", "light")
  } else {
    page.classList.add("page--theme--dark")
    localStorage.setItem("theme", "dark")
  }
})

export function isDarkTheme(): boolean {
  const theme = localStorage.getItem("theme") || ""

  return theme === "dark"
}
