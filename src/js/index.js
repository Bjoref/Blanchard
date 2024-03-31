import loader from "./modules/loader.js";

loader();

const sectionGalleryCheckbox = document.querySelectorAll(
  ".section-gallery__form-control"
);

sectionGalleryCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("input", () => {
    if (checkbox.classList.contains("section-gallery__form-control_checked")) {
      checkbox.classList.remove("section-gallery__form-control_checked");
    } else {
      checkbox.classList.add("section-gallery__form-control_checked");
    }
  });
});

function onEntry(entry) {
  entry.forEach((change) => {
	console.log(change.isIntersecting)
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}
