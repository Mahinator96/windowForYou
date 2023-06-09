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