import { isDarkTheme } from "./theme-toggle"

const switchToggle = document.querySelector(
  ".switch-toggle"
) as HTMLButtonElement

type Color = "#fff" | "#0b0b0b"
type Opacity = 0.7 | 0.3

const darkOpacity = 0.7
const lightOpacity = 0.3

const initialOpacity = isDarkTheme() ? darkOpacity : lightOpacity
const initialColor: Color = isDarkTheme() ? "#fff" : "#0b0b0b"

switchToggle.addEventListener("click", () => {
  if (isDarkTheme()) {
    loadParticles("#fff", darkOpacity)
  } else {
    loadParticles("#0b0b0b", lightOpacity)
  }
})

loadParticles(initialColor, initialOpacity)

function loadParticles(color: Color, opacity: Opacity) {
  tsParticles.load("tsparticles", {
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },

      // modes
      modes: {
        push: {
          quantity: 1,
          particles_nb: 1,
        },
        repulse: {
          distance: 20,
        },
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.1,
          },
        },
      },
    },
    particles: {
      links: {
        enable: true,
        opacity: opacity,
        distance: 100,
        color: {
          value: color,
        },
      },
      move: {
        enable: true,
      },
      color: {
        value: color,
      },
    },
    opacity: {
      value: {
        min: 0.5,
        max: 1,
      },
    },
    size: {
      value: {
        min: 0.5,
        max: 1,
      },
    },
    number: {
      value: 10,
      density: {
        enable: false,
      },
    },
  })
}
