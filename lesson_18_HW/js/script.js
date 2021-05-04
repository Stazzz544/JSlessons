'use strick';


const personalMivieDB = {
	count: undefined,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	toggleVisibleMyDB: function () {
		if (personalMivieDB.privat == false) {
			personalMivieDB.privat = true;
			console.log(personalMivieDB.privat);
		} else {
			personalMivieDB.privat = false;
			console.log(personalMivieDB);
		}
	},

	start: function () {
		personalMivieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (personalMivieDB.count == '' || personalMivieDB.count == null || isNaN(personalMivieDB.count)) {
			personalMivieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		} 
		//numberOfFilms == null - пользователь жмёт отмену
		//isNaN - is not a number - пользовательввёл не число - если не число - то вернёт true
	},

	writeYourGenres: function () {
		for(let i = 1; i <= 3; i++){
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
				while (genre == null || genre == ''){
					genre = prompt(`Ваш любимый жанр под номером ${i}`);
				}
			personalMivieDB.genres[i-1] = genre;
			// personalMivieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); второй вариант записи
		}
		personalMivieDB.genres.forEach(function(item, i){
			console.log(`любимый жанр ${i+1}  это ${item}`);
		});
	},

	showMyDB: function (){
		if (personalMivieDB.privat == false) {
			console.log(personalMivieDB);
		}
	},

	rememberMyFilms: function () {
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
	},

	detectPersonalLevel: function () {
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
};


