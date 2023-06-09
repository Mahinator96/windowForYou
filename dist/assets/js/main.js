/* 
	Пример записи подключения	//= components/script.js
*/

/* //= components/var.js */
/* //= components/function.j */
/* //= components/header.js */
/* //= components/process.js */
/* //= components/factory.js */
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