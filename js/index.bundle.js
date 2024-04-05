!(function () {
  "use strict";
  !(function () {
    const e = document.querySelector("#loader");
    window.addEventListener("load", () => {
      e.classList.add("loader-wrapper--hidden");
    });
  })(),
    document.querySelectorAll(".section-gallery__form-control").forEach((e) => {
      e.addEventListener("input", () => {
        e.classList.contains("section-gallery__form-control_checked")
          ? e.classList.remove("section-gallery__form-control_checked")
          : e.classList.add("section-gallery__form-control_checked");
      });
    });
  let e = new IntersectionObserver(
      function (e) {
        e.forEach((e) => {
          console.log(e.isIntersecting),
            e.isIntersecting && e.target.classList.add("element-show");
        });
      },
      { threshold: [0.5] }
    ),
    t = document.querySelectorAll(".element-animation");
  for (let o of t) e.observe(o);
})();
