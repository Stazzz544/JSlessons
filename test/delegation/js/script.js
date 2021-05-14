window.addEventListener('DOMContentLoaded', () => {
	const ul = document.querySelector('.wrapper'),
			li = document.querySelectorAll('li');
	

	ul.addEventListener('click', (e) => {
		// console.log(e.target.classList.value);
		console.log(e.target);
		// console.log(e.target.tagName);
		if (e.target.tagName == 'LI' && e.target.classList.value != 'abc') {
			console.log('asad');
		} else if (e.target.classList.contains('abc')) {
			console.log('its jhonny');
		}
	});











/*
	//console.log(ul);
	//console.log(li);
	li.forEach((e) => {
		// console.log(e)
		e.addEventListener('click', (e) => {
			console.log(e.target);
			// e.target.innerHTML = +e.target.innerHTML * +e.target.innerHTML;
		});
	});
*/

});



