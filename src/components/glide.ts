import Glide, {
  Breakpoints,
  Controls,
  Swipe,
} from "@glidejs/glide/dist/glide.modular.esm"

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 4,
  gap: 15,
  focusAt: 0,
  swipeThreshold: false,
  peek: {
    before: 0,
    after: 0,
  },
  breakpoints: {
    1024: {
      perView: 3,
    },
    768: {
      perView: 1,
    },
  },
}).mount({ Controls, Breakpoints, Swipe })
