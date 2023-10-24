import Swiper from 'swiper';
import Viewer from 'viewerjs';

document.addEventListener('DOMContentLoaded', () => {

	const gallerys = document.querySelectorAll('.swiper');

	gallerys.forEach(element => {
		const gallery = new Viewer(element, {});
	  });
	

	  const swiperCase = new Swiper('.swiperCase', {
		slidesPerView: 'auto',
		loop: true,
		grabCursor: true,
		initialSlide: 8,
		spaceBetween: 40,
	  });
	
});