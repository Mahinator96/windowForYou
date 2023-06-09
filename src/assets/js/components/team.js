const team = new Swiper('.team__list-wrapper', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.team__slider-button-next',
		prevEl: '.team__slider-button-prev',
	},
	breakpoints: {

		540: {
			slidesPerView: 2,
		}
	},
});
