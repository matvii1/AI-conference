tsParticles.load("tsparticles", {
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 3,
      },
      repulse: {
        distance: 75,
      },
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
})
