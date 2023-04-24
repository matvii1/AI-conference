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
        particles_nb: 1
      },
      repulse: {
        distance: 20,
      },
      grab: {
        distance: 300,
        line_linked: {
          opacity: 0.1,
        }
      }
    },
  },
  particles: {
    links: {
      enable: true,
      opacity: 0.1,
      distance: 200,
      color: {
        value: "#0b0b0b",
      },
    },
    move: {
      enable: true,
    },
    color: {
      value: "#000",
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
      enable: false
    }
  }
})
