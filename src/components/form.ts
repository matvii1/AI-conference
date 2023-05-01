const form = document.querySelector(".join-us__form") as HTMLFormElement
const nameGroup = form.querySelector(".name-group") as HTMLDivElement
const emailGroup = form.querySelector(".email-group") as HTMLDivElement
const emailInput = form.querySelector("#email") as HTMLInputElement
const nameInput = form.querySelector("#name") as HTMLInputElement
form.addEventListener("submit", listener)

type InputType = "name" | "email" | "message"
console.log("import here", import.meta.env.VITE_TELEGRAM_BOT_TOKEN)

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const BOT_CHAT_ID: number = import.meta.env.VITE_TELEGRAM_CHAT_ID

function listener(event: Event) {
  event.preventDefault()
  const { name, email, message } = Object.fromEntries(
    new FormData(form).entries()
  )

  const { isError } = validateFields(name.toString(), email.toString())

  if (isError) {
    return
  }

  try {
    makeTelegramRequest(
      `<b>New message from website</b> %0A Name: ${name} %0A Email ${email}%0AMessage: ${message}`
    )
  } catch (error) {
    console.log("sent telegram message")
  }

}

function validateFields(name: string, email: string) {
  let isError = false

  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const numberRegex = /\d/
  const specialCharRegex = /[!@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?~]/

  const isNameEmpty = name === ""
  const isEmailEmpty = email === ""
  const isNameShort = name.toString().length < 3 && !isNameEmpty
  const isEmailValid = emailRegex.test(email.toString()) && !isEmailEmpty
  const isNameWithNumbers = numberRegex.test(name.toString()) && !isNameEmpty
  const isNameWithSpecialChar =
    specialCharRegex.test(name.toString()) && !isNameEmpty

  if (isNameEmpty) {
    showError("name", "Name is required")

    isError = true
  }

  if (isNameWithNumbers || isNameWithSpecialChar) {
    showError("name", "Name should not contain numbers or special characters")

    isError = true
  }

  if (isNameShort) {
    showError("name", "Name should contain at least two characters")

    isError = true
  }

  if (isEmailEmpty) {
    showError("email", "Email is required")

    isError = true
  }

  if (!isEmailValid) {
    showError("email", "Please enter valid email address")

    isError = true
  }

  return { isError }
}

function showError(type: InputType, message: string) {
  switch (type) {
    case "name":
      const nameText = nameGroup.querySelector(".input-helper-text")

      if (!nameText) {
        nameGroup.classList.add("name-group--error")
        nameGroup.insertAdjacentHTML(
          "beforeend",
          `
				<p class="input-helper-text">${message}</p>`
        )
      } else {
        nameText.textContent = message
      }

      break

    case "email":
      const emailText = emailGroup.querySelector(".input-helper-text")

      if (!emailText) {
        emailGroup.classList.add("email-group--error")
        emailGroup.insertAdjacentHTML(
          "beforeend",
          `
				<p class="input-helper-text">${message}</p>`
        )
      } else {
        emailText.textContent = message
      }
  }
}

;[nameInput, emailInput].forEach((input) => {
  input.addEventListener("focus", () => {
    const parent = input.parentElement as HTMLDivElement

    parent.querySelector(".input-helper-text")?.remove()
    parent.classList.remove("name-group--error")
    parent.classList.remove("email-group--error")
  })
})

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

function makeTelegramRequest(text: string) {
  const TELEGRAM_BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${BOT_CHAT_ID}&text=${text}&parse_mode=HTML`

  let api = new XMLHttpRequest()
  api.open("GET", TELEGRAM_BASE_URL, true)
  api.send()
}
