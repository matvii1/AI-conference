import { schedule } from "../../timetable"
import { insertAfter } from "../../utils/insertAfter"

const timetable = document.querySelector(".timetable__list") as HTMLUListElement

schedule.forEach((card) => {
  const item = document.createElement("li")
  item.classList.add("timetable__item", "card")

  insertAfter(
    timetable,
    `<li class="timetable__item card" data-id="${card.id}">
			<p class="card__time">${card.startTime}</p>
			<div class="card__content">
        <div>
          <h2 class="card__title">
          ${
            (card.icon &&
              `<i class="fa-solid card__icon fa-${card.icon}"></i>`) ||
            ""
          }

          ${card.title}</h2>
          <p class="card__desc">
            ${card.shortDesc}
          </p>
        </div>
        
				<button class="card__button">
					See details <i class="fa-solid fa-arrow-right-long card__button__icon"></i>
				</button>
			</div>
		</li>`
  )
})
