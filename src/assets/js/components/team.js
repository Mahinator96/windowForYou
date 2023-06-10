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