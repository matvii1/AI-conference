const cards = document.querySelectorAll(
  ".timetable__item"
) as NodeListOf<HTMLElement>

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-animated")
        observer.unobserve(entry.target)
      } else {
        entry.target.classList.remove("is-animated")
      }
    })
  },
  {
    threshold: 0.35,
    rootMargin: "40px",
  }
)

cards.forEach((card) => {
  observer.observe(card)
})
