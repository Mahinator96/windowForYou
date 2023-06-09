const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.process__slider-button-next',
		prevEl: '.process__slider-button-prev',
	},
	breakpoints: {

		740: {
			slidesPerView: 2,
		}

	},
});
