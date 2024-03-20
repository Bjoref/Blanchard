import loader from './modules/loader.js'

loader();

const sectionGalleryCheckbox = document.querySelectorAll('.section-gallery__form-control');

sectionGalleryCheckbox.forEach((checkbox) => {
	checkbox.addEventListener('input', () => {
		if(checkbox.classList.contains('section-gallery__form-control_checked')) {
			checkbox.classList.remove('section-gallery__form-control_checked')
		} else {
			checkbox.classList.add('section-gallery__form-control_checked')
		}
	})
})