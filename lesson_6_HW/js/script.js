'use strick';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMivieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


const a = prompt('Назовите один из последних просмотренных фильмов', ''),
		b = +prompt('На колько оцените его?', ''),
		c = prompt('Назовите один из последних просмотренных фильмов', ''),
		d = +prompt('На колько оцените его?', '');

personalMivieDB.movies[a] = b;
personalMivieDB.movies[c] = d;

console.log(personalMivieDB);