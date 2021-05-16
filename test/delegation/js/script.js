window.addEventListener('DOMContentLoaded', () => {
	const ul = document.querySelector('.wrapper'),
			li = document.querySelectorAll('li');
	

	ul.addEventListener('click', (e) => {
		if (e.target.tagName == 'LI') {
			console.dir(e.target);
			e.target.innerHTML *= 2;
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



