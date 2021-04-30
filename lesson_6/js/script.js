'use strick';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMivieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


const film = prompt('Назовите один из последних просмотренных фильмов', ''),
		rating = +prompt('На колько оцените его?', '');

personalMivieDB.movies[film] = rating;

console.log(personalMivieDB);