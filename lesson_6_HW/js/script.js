'use strick';

let numbersOfFilms = '';

const personalMobieDB =  {
			count: numbersOfFilms,
			movies: {},
			actors: {},
			genres: [],
			privat: false,
			start: function  () {
				personalMobieDB.countFilms(numbersOfFilms);
				personalMobieDB.whiteYourGenres(personalMobieDB.genres);
				personalMobieDB.lastMovies(personalMobieDB.movies);
				personalMobieDB.howManuFilms(personalMobieDB.count);
				personalMobieDB.showMyDB();
			},
			lastMovies: function (movies) {
				for (let i = 0; i < 3; i++){
					let a = prompt('Какой последний фильм вы посмотрели?', 'максимум 10 символов');
						while (a == null || a == '' || a.length > 10) {
							alert('Введены не коректные данные, повторите попытку');
							a = prompt('Какой последний фильм вы посмотрели?', 'максимум 10 символов');
						}
			
					 let b = +prompt('На сколько вы его оцените', 'максимум 10 балллов');
						while (b =='' || b > 10 || b < 0 || isNaN(b) == true || b == null || isNaN(b) == true) {
							alert('введите коректную оценку(от 0 до 10)');
							b = +prompt('на сколько вы оцениваете данный фильм( от 1 до 10');
						}
						movies[a] = b;
				}
			},
			countFilms: function (count) {
				for (let i = 0; i < 1; i++) {
					count = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число просмотренных фильмов');
					if (count == '' || count == null || count < 0 || isNaN(count) == true)  {
						alert('Введены некоректные данные, введите число просмотренных фильмов');
						i--;
					}
				}
			},

			howManuFilms: function (total) {
				if (total >= 30) {
					alert('Вы киноман!');
				} else if (total >= 20) {
					alert('Вы классический зритель');
				} else {
					alert('Просмотрено довольно мало фильмов');
				}
			},

			showMyDB: function () {
				if (personalMobieDB.privat == false) {
					console.log(personalMobieDB);
				} else {
					console.log('приватный аккаунт, данные не доступны');
				}
			},
			whiteYourGenres: function (arrGenre,) {
				for (let i = 1 ; i < 4; i++) {
					let a = prompt(`Назовите ваш любимый жанр под номером ${i}`)
					
					if (isNaN(a) == false || a == '' || a == false) {
						alert('Введены не корректные данные');
						i--;
					} else {
						a.toLowerCase();
						arrGenre.push(a);
					}
				}
				arrGenre.sort();
				arrGenre.forEach(function(e, i){
					console.log(`любимый жанр ${i+1}: ${e}`);
				});
			},
			toggleVisibleMyDB: function () {
				if (personalMobieDB.privat == false) {
					personalMobieDB.privat = true;
				} else {
					personalMobieDB.privat = false;
				}
				console.log(personalMobieDB.privat);
			}
		};






let a = false;
console.log(a.length);





