
"use strick";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const spam = document.querySelectorAll('.promo__adv img'),
		genre = document.querySelector('.promo__genre'),
		bacground = document.querySelector('.promo__bg'),
		oldStyleFilms = document.querySelectorAll('.promo__interactive-item'),
		films = document.querySelector('.promo__interactive-list'),
		input = document.querySelector('.adding__input'),
		checkbox = document.querySelector('[type="checkbox"]'),
		btn = document.querySelector('button');


		deleteArrItems (spam);
		changeText (genre);
		oldStyleDelete (oldStyleFilms);
		changeBg (bacground);
		moviesList(movieDB.movies);


btn.addEventListener('click', function(e) {
	e.preventDefault();
	let newFilm = input.value,
		 newStyleFilms = document.querySelectorAll('.promo__interactive-item');

	if (newFilm != '') {
		removeNewStyleFilm (newStyleFilms);
		reduceWord ();
		movieDB.movies.push(newFilm.toUpperCase());
		movieDB.movies.sort();
		moviesList(movieDB.movies);
		input.value = '';
	}
	if (checkbox.checked) {
		alert(`фильм "${newFilm}" добавлен в избранное`);
		checkbox.checked = false;
	}

	function reduceWord () {
		if (newFilm.length > 21) {
			newFilm = newFilm.substring(0, 21);
			newFilm += '...';
		}
	}
});


function changeText (item) {
	item.innerHTML = 'драма';
}

function changeBg (item) {
	item.style.cssText = `background-image: url('img/bg.jpg')`;
}

function removeNewStyleFilm (arr) {
	arr.forEach(item =>{
		item.remove();
	});
}

function deleteArrItems (spam) {
	spam.forEach(item =>{
		item.remove();
	});
}

function oldStyleDelete (old) {
	old.forEach(item =>{
		item.remove();
	});
}

function moviesList(arr) {
	arr.forEach ((e, i) => {
		films.innerHTML += 
		`<li class="promo__interactive-item">${i+1}. ${e}
			<div class="delete"></div>
		</li>`;

		let trashCan = document.querySelectorAll('.delete');
		trashCan.forEach(function (item, i) {
			item.addEventListener('click', () => {
				let newStileFilms = document.querySelectorAll('.promo__interactive-item');
				movieDB.movies.splice(i, 1);
				oldStyleDelete (newStileFilms);
				moviesList();
			});
		});
	});
}

