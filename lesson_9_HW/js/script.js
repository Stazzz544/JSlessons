'use strick';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMivieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

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

if (personalMivieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (10 < personalMivieDB.count && personalMivieDB.count < 30) {
	alert('Вы классический зритель');
} else if (30 < personalMivieDB.count) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}




console.log(personalMivieDB);