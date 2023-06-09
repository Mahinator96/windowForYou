const factorySwiper = new Swiper('.factory__slider-swiper', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 20,
	centeredSlidesBounds: true,
	// Navigation arrows
	navigation: {
		nextEl: '.factory__slider-button-next',
		prevEl: '.factory__slider-button-prev',
	},
	// breakpoints: {

		// 740: {
		// 	slidesPerView: 2,
		// }

	// },
});
