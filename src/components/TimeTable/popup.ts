import { schedule } from "../../timetable"

const popup = document.querySelector(".popup") as HTMLDivElement
const popupCloseIcon = document.querySelector(
  ".popup__close-icon"
) as HTMLElement

const hero_paragraph = document.querySelector(
  ".hero__desc"
) as HTMLParagraphElement

const popupOpenButtons = document.querySelectorAll(
  ".card__button"
) as NodeListOf<HTMLButtonElement>

const popupTitle = document.querySelector(".popup__title") as HTMLHeadingElement
const popupTime = document.querySelector(".popup__time") as HTMLParagraphElement
const popupDesc = document.querySelector(".popup__desc") as HTMLParagraphElement

const popupImg = document.querySelector(".popup__img") as HTMLImageElement

popupOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openPopup(button)
  })
})

closeOnBlur()

popupCloseIcon.addEventListener("click", () => {
  closePopup()
})

function openPopup(button: HTMLButtonElement) {
  const cardData = getCardData(button)

  popup.classList.add("active")
  hero_paragraph.style.zIndex = "1"
  document.body.style.overflow = "hidden"

  popupTitle.textContent = cardData?.title || "Error loading title"
  popupTime.innerHTML =
    `<i class="fa-regular fa-clock"></i> 
    ${cardData?.startTime} - ${cardData?.finishTime}` || "00:00"
  popupDesc.textContent = cardData?.fullDesc || "Error loading description"
  popupImg.src = cardData?.img || "https://via.placeholder.com/150"
}

function closePopup() {
  document.body.style.overflow = "auto"
  hero_paragraph.style.zIndex = "2"
  popup.classList.remove("active")
}

function getCardData(button: HTMLButtonElement) {
  const closestCard = button.closest(".card") as HTMLDivElement
  const foundCardData = schedule.find(
    (el) => +el.id === Number(closestCard!.dataset.id)
  )

  return foundCardData
}

function closeOnBlur() {
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const isButtonClicked = target.closest(".card__button")
    const isPopupContentClicked = target.closest(".popup__content")

    if (!isButtonClicked && !isPopupContentClicked) {
      closePopup()
    }
  })
}