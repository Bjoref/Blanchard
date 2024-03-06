import mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js'

mobileNav();
loader();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	loop: true,
	parallax: true,
	speed: 1000,

	keyboard: {
		enabled: true,
	},
});
