'use strick';

const personalMobieDB =  {
			count: 0,
			movies: {},
			actors: {},
			genres: [],
			privat: false,
			start: function  () {
				personalMobieDB.countFilms();
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
						while (b =='' || b > 10 || b < 0 || isNaN(b) == true || b == null) {
							alert('введите коректную оценку(от 0 до 10)');
							b = +prompt('на сколько вы оцениваете данный фильм( от 1 до 10');
						}
						movies[a] = b;
				}
			},
			countFilms: function () {
				for (let i = 0; i < 1; i++) {
					personalMobieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число просмотренных фильмов');
					if (personalMobieDB.count == '' || personalMobieDB.count == null || personalMobieDB.count < 0 || isNaN(personalMobieDB.count) == true)  {
						alert('Введены некоректные данные, введите число просмотренных фильмов');
						i--;
					}
					console.log(personalMobieDB.count);
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




