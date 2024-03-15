import loader from './modules/loader.js'

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
