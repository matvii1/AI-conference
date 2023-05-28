import { schedule } from "../../timetable"
import { ISchedule } from "../../types/Schedule"

//#region Selectors
const popup = document.querySelector(".popup") as HTMLDivElement
const popupCloseIcon = document.querySelector(
  ".popup__close-icon"
) as HTMLElement
const popupContent = document.querySelector(".popup__content") as HTMLDivElement
const popupBody = document.querySelector(
  ".popup__content-body"
) as HTMLDivElement
const hero_paragraph = document.querySelector(
  ".hero__desc"
) as HTMLParagraphElement

const popupOpenButtons = document.querySelectorAll(
  ".card__button"
) as NodeListOf<HTMLButtonElement>

//#endregion

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

  const popupHTMLContent = `
    <div class="popup__top">
      <h2 class="popup__title">${cardData?.title}</h2>
      <p class="popup__time">
        <i class="fa-regular fa-clock"></i> 
        ${cardData?.startTime} - ${cardData?.finishTime}
      </p>
    </div>

    <div class="popup__bottom">
      <img src="${cardData?.img}" alt="speaker" class="popup__img" height="350px" width="auto"
       />
      <p class="popup__desc">${cardData?.fullDesc}</p>
    </div>
    `

  popupContent.style.opacity = "1"
  hero_paragraph.style.zIndex = "1"

  popup.classList.add("popup--active")
  popup.classList.add("back-blur")
  document.body.style.overflow = "hidden"

  popupBody.innerHTML = popupHTMLContent
}

function closePopup() {
  popupContent.style.opacity = "0"
  popup.classList.remove("back-blur")

  setTimeout(() => {
    popup.classList.remove("popup--active")
    document.body.style.overflow = "auto"
  }, 100 * 2)

  hero_paragraph.style.zIndex = "2"
}

function getCardData(button: HTMLButtonElement): ISchedule | undefined {
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
