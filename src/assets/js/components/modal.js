btnsModalOpen.forEach(btnModalOpen => {
	btnModalOpen.addEventListener('click', () => {
		body.classList.add('_lock');
		modal.classList.add('modal--show');
	})
})


modalClose.addEventListener('click', () => {
	body.classList.remove('_lock');
	modal.classList.remove('modal--show');
})

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		body.classList.remove('_lock');
		modal.classList.remove('modal--show');
	}
})