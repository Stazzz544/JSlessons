'use strick';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
	//numberOfFilms == null - пользователь жмёт отмену
	//isNaN - is not a number - пользовательввёл не число - если не число - то вернёт true
}

start();

const personalMivieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function writeYourGenres() {
	for(let i = 1; i <= 3; i++){
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMivieDB.genres[i-1] = genre;
		// personalMivieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); второй вариант записи
	}
}

writeYourGenres();


function showMyDB(){
	if (personalMivieDB.privat == false) {
		console.log(personalMivieDB);
	}
}

showMyDB();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Назовите один из последних просмотренных фильмов', ''),
				b = +prompt('На сколько оцените его?', '');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMivieDB.movies[a] = b;
			console.log('done');
		} else {
			i--;
			console.log('error');
		}
	}
}

rememberMyFilms();







function detectPersonalLevel() {
	if (personalMivieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (10 < personalMivieDB.count && personalMivieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (30 < personalMivieDB.count) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

detectPersonalLevel();
