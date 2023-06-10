/* 
	Пример записи подключения	//= components/script.js
*/

const	body 					= document.querySelector('body'),
			burger 				= document.querySelector('.burger'),
			teamSlides		= Array.from(document.querySelectorAll('.team__item')),
			teamBtnShow 	= document.querySelector('.team__btn--big.show'),
			teamBtnHide 	= document.querySelector('.team__btn--big.hide'),
			burgerClose 	= document.querySelector('.burger__close'),
			burgerWrapper = document.querySelector('.burger__wrapper');

burger.addEventListener('click', () => {
	burger.classList.add('burger--open')
	burgerWrapper.classList.add('burger__wrapper--open');
	body.classList.add('_lock');
})

burgerClose.addEventListener('click', () => {
	burger.classList.remove('burger--open');
	burgerWrapper.classList.remove('burger__wrapper--open');
	body.classList.remove('_lock');
})

console.log('hi');
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
// = components/team.js