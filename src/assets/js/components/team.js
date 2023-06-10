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
 * Выполнение проверки заданной в пределах ширин экрана: maxWidth и minWidth  
 * и отображение кнопки(btnShow) 'показать ещё',
 * если количество карточек(cards) больше задаваемого числа(maxCards)
**/
const response = (cards, maxCards, btnShow, btnHide, minWidth, maxWidth) => {
	let maxCardsMath = maxCards - 1;
	// Если ширина экрана входит в указанные размеры ширины
	if (window.innerWidth > minWidth && window.innerWidth <= maxWidth) {
		// Скрывает лишние карточки
		hideCards(cards, btnShow, maxCardsMath);
		
    btnShow.addEventListener('click', () => { 	// При нажатии на кнопку(btnShow) - показать все карточки
        cards.forEach(item => item.classList.remove('hidden'));

				btnShow.classList.add('hidden');
				btnHide.classList.remove('hidden');
			})

			btnHide.addEventListener('click', () => { 	// При нажатии на кнопку(btnHide) - показать все карточки
				hideCards(cards, btnShow, maxCardsMath);

				btnShow.classList.remove('hidden');
				btnHide.classList.add('hidden');
			})
	}
}

// Вызов ф-ии для отображения при загрузке страницы
response(teamSlides, 6, teamBtnShow, teamBtnHide, 1110, 1920);
response(teamSlides, teamSlides.length, teamBtnShow, teamBtnHide, 320, 1110);

// При изменении ширины (динамика) происходит расчёт карточек и показ(скрытие) кнопки
window.addEventListener('resize', event => {
	let eventWidth = event.target.window.innerWidth

    if (eventWidth <= 1920 && eventWidth > 1110) response(teamSlides, 6, teamBtnShow, teamBtnHide, 1110, 1920);
    if (eventWidth <= 1110 && eventWidth > 320) response(teamSlides, teamSlides.length, teamBtnShow, teamBtnHide, 320, 1110);
})