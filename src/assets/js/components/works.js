const worksSlider = new Swiper('.works__slider-wrapper', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.works__slider-button-next',
		prevEl: '.works__slider-button-prev',
	},
	pagination: {
    el: '.works__slider-pagination',
    type: 'bullets',
  },
})