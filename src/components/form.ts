import { normalizeString } from "../utils/normalizeString"

//#region selectors
const form = document.querySelector(".join-us__form") as HTMLFormElement
const nameGroup = form.querySelector(".name-group") as HTMLDivElement
const emailGroup = form.querySelector(".email-group") as HTMLDivElement
const emailInput = form.querySelector("#email") as HTMLInputElement
const nameInput = form.querySelector("#name") as HTMLInputElement
type InputType = "name" | "email" | "message"
const successMessage = document.querySelector(
  ".form__message--success"
) as HTMLParagraphElement
const errorMessage = document.querySelector(
  ".form__message--error"
) as HTMLParagraphElement
const formButton = document.querySelector(".form__button") as HTMLButtonElement
//#endregion
const inputs = [nameInput, emailInput]

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const BOT_CHAT_ID: number = import.meta.env.VITE_TELEGRAM_CHAT_ID

form.addEventListener("submit", listener)

function listener(event: Event) {
  event.preventDefault()
  const { name, email, message } = Object.fromEntries(
    new FormData(form).entries()
  )
  const hasMessage = message !== ""

  const { isError } = validateFields(
    normalizeString(name),
    normalizeString(email)
  )

  if (isError) {
    shakeForm()

    return
  }

  const telegramMessage = hasMessage
    ? `<b>New message from website</b>%0A Name: ${normalizeString(
        name
      )}%0A Email ${normalizeString(email)}%0AMessage: ${normalizeString(
        message
      )}`
    : `<b>New subscriber</b>%0A Name: ${normalizeString(
        name
      )}%0A Email ${normalizeString(email)}`

  const res = makeTelegramRequest(telegramMessage)

  if (res) {
    shakeForm()
    showErrorFormMessage()

    setTimeout(() => {
      removeErrorFormMessage()
    }, 3000)

    return
  }

  form.reset()

  showSuccessFormMessage(hasMessage)
  
  setTimeout(() => {
    removeSuccessFormMessage()
  }, 3000)
}

function validateFields(name: string, email: string) {
  let isError = false

  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const numberRegex = /\d/
  const specialCharRegex = /[!@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?~]/

  const isNameEmpty = name === ""
  const isEmailEmpty = email === ""
  const isNameShort = name.length < 3 && !isNameEmpty
  const isEmailValid = emailRegex.test(email) && !isEmailEmpty
  const isNameWithNumbers = numberRegex.test(name) && !isNameEmpty
  const isNameWithSpecialChar = specialCharRegex.test(name) && !isNameEmpty

  if (isNameWithNumbers || isNameWithSpecialChar) {
    showError("name", "Name should not contain numbers or special characters")

    isError = true
  }

  if (isNameShort) {
    showError("name", "Name should contain at least three characters")

    isError = true
  }

  if (!isEmailValid) {
    showError("email", "Please enter valid email address")

    isError = true
  }

  if (isNameEmpty) {
    showError("name", "Name is required")

    isError = true
  }

  if (isEmailEmpty) {
    showError("email", "Email is required")

    isError = true
  }

  return { isError }
}

function showError(type: InputType, message: string) {
  switch (type) {
    case "name":
      const nameText = nameGroup.querySelector(".input-helper-text")

      if (!nameText?.textContent) {
        nameGroup.classList.add("name-group--error")
        nameGroup.insertAdjacentHTML(
          "beforeend",
          `
          <div class="input-helper-text-wrapper">
            <i class="fa-solid fa-triangle-exclamation error-icon"></i>
            <p class="input-helper-text">
              ${message}
            </p>
          </div>`
        )
      } else {
        nameText.textContent = message
      }

      break

    case "email":
      const emailText = emailGroup.querySelector(".input-helper-text")

      if (!emailText?.textContent) {
        emailGroup.classList.add("email-group--error")
        emailGroup.insertAdjacentHTML(
          "beforeend",
          `
          <div class="input-helper-text-wrapper">
            <i class="fa-solid fa-triangle-exclamation error-icon"></i>
            <p class="input-helper-text">${message}</p>
          </div>`
        )
      } else {
        emailText.textContent = message
      }
  }
}

removeErrorMessageOnFocus()

function showSuccessFormMessage(hasMessage: boolean = false) {
  if (hasMessage) {
    successMessage.textContent = "Message sent successfully"
  } else {
    successMessage.textContent = "You have been successfully registered"
  }

  formButton.classList.add("form__button--success")
  successMessage.classList.add("form__message--success--active")
}

function removeSuccessFormMessage() {
  formButton.classList.remove("form__button--success")
  successMessage.classList.remove("form__message--success--active")
}

function showErrorFormMessage() {
  formButton.classList.add("form__button--error")
  errorMessage.classList.add("form__message--error--active")
}

function removeErrorFormMessage() {
  formButton.classList.remove("form__button--error")
  errorMessage.classList.remove("form__message--error--active")
}

function makeTelegramRequest(text: string): boolean {
  let error = false
  const TELEGRAM_BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${BOT_CHAT_ID}&text=${text}&parse_mode=HTML`

  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        error = false
      } else {
        error = true
      }
    } else {
      error = true
    }
  }

  xhr.open("GET", TELEGRAM_BASE_URL, false)

  try {
    xhr.send(null)
  } catch (error) {
    error = true
  }

  return error
}

function shakeForm() {
  form.classList.add("shake-form")

  setTimeout(() => {
    form.classList.remove("shake-form")
  }, 300)
}

function removeErrorMessageOnFocus() {
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      const parent = input.parentElement as HTMLDivElement

      parent.querySelector(".input-helper-text-wrapper")?.remove()
      parent.classList.remove("name-group--error")
      parent.classList.remove("email-group--error")
    })
  })
}
