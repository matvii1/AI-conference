import { isDarkTheme } from "./theme-toggle"

const switchToggle = document.querySelector(
  ".switch-toggle"
) as HTMLButtonElement

let particleDots = isDarkTheme() ? "#fff" : "#0b0b0b"

switchToggle.addEventListener("click", () => {
  if (isDarkTheme()) {
    particleDots = "#fff"
  } else {
    particleDots = "#0b0b0b"
  }

  loadParticles()
})

loadParticles()

function loadParticles() {
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
        opacity: 0.3,
        distance: 100,
        color: {
          value: particleDots,
        },
      },
      move: {
        enable: true,
      },
      color: {
        value: particleDots,
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
