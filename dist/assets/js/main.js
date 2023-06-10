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
const team = new Swiper('.team__list-wrapper', {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 30,
	// Navigation arrows
	navigation: {
		nextEl: '.team__slider-button-next',
		prevEl: '.team__slider-button-prev',
	},
	breakpoints: {
		
		740: {
			allowTouchMove: true,
			slidesPerView: 2,
		},

		1110: {
			allowTouchMove: false,
			slidesPerView: 3,
		}
	},
});

// Скрывает лишние карточки
const hideCards = (cards, btnShow, maxCardsMath) => {
	cards.forEach((item, index) => { 	// Перебрать все карточки
		item.classList.add('hidden'); 	// Скрыть все карточки

		if (index <= maxCardsMath) { 				// Если карточек меньше чем указано в параметре
			item.classList.remove('hidden');
			btnShow.classList.add('hidden'); 	// Показать все карточки
		} else if (index > maxCardsMath) { 	// Иначе показать кнопку "Показать ещё"
			btnShow.classList.remove('hidden');
		}
	})
}

/**
 * При изменении размера экрана меняет кнопку на "показать ещё",
 * так как при изменении размера экрана галерея перерисовывается 
 * и кнопка тоже должна
*/
const renderButtons = (btnShow, btnHide) => {
	if (btnShow.classList.contains('hidden')) {
		btnShow.classList.remove('hidden');
	}
	if (btnHide && !btnHide.classList.contains('hidden')) {
		btnHide.classList.add('hidden');
	}
}

/**
 * При нажатии на кнопку(btnShow) - показывает все карточки
 */
const clickBtnShow = (cards, btnShow, btnHide) => {
	btnShow.addEventListener('click', () => { 	
		cards.forEach(item => item.classList.remove('hidden'));

		btnShow.classList.add('hidden');
		
		if (btnHide) {
			btnHide.classList.remove('hidden');
		}
	})
}

/**
 * При нажатии на кнопку(btnHide) - скрывает лишние карточки
 */
const clickBtnHide = (cards, maxCardsMath, btnHide, btnShow) => {
	btnHide.addEventListener('click', () => {
		hideCards(cards, btnShow, maxCardsMath);

		btnShow.classList.remove('hidden');
		btnHide.classList.add('hidden');
	})
}

/**
 * Выполнение проверки заданной в пределах ширин экрана: maxWidth и minWidth  
 * и отображение кнопки(btnShow) 'показать ещё',
 * если количество карточек(cards) больше задаваемого числа(maxCards)
 * @param {array} cards 
 * @param {number} maxCards 
 * @param {const} btnShow 
 * @param {number} maxWidth 
 * @param {number} minWidth 
**/
const response = (cards, maxCards, btnShow, btnHide, minWidth, maxWidth) => {
	let maxCardsMath = maxCards - 1;

	renderButtons(btnShow, btnHide); // Рендер кнопок при изменении ширины экрана
	
	// Если ширина экрана входит в указанные размеры ширины
	if (window.innerWidth > minWidth && window.innerWidth <= maxWidth) {
		hideCards(cards, btnShow, maxCardsMath); 							// Скрывает лишние карточки
		clickBtnShow(cards, btnShow, btnHide); 								// При нажатии на кнопку(btnShow) - показывает все карточки

		if (btnHide) {							
			clickBtnHide(cards, maxCardsMath, btnHide, btnShow); 	// При нажатии на кнопку(btnHide) - скрывает лишние карточки
		}					
	}
}

// Вызов ф-ии для отображения при загрузке страницы
response(teamSlides, 6, teamBtnShow, teamBtnHide, 1110, 1920);
response(teamSlides, teamSlides.length, teamBtnShow, teamBtnHide, 320, 1110);

// При изменении ширины (динамика) происходит расчёт карточек и показ(скрытие) кнопки
window.addEventListener('resize', event => {
	let eventWidth = event.target.window.innerWidth; 

    if (eventWidth <= 1920 && eventWidth > 1110) response(teamSlides, 6, teamBtnShow, teamBtnHide, 1110, 1920);
    if (eventWidth <= 1110 && eventWidth > 320) response(teamSlides, teamSlides.length, teamBtnShow, teamBtnHide, 320, 1110);
})