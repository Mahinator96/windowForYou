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
/* //= components/function.j */
/* //= components/header.js */
/* // = components/works.js */
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
/* //= components/factory.js */
/* // = components/team.js */