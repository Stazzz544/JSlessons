
'use strict';

document.addEventListener('DOMContentLoaded', () => {
		
	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Одержимость",
			"Ла-ла лэнд",
			"Скотт Пилигрим против...",
		]
	};

	const spam = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		btn = document.querySelector('button'),
		form = document.querySelector('form.add'),
		input = document.querySelector('.adding__input'),
		checkbox = form.querySelector('[type = "checkbox"]');
		// trashcan = document.querySelectorAll('.delete');


//==================================================================
//----------ФУНКЦИЯ УДАЛЕНИЯ СПАМА----------
	const deleteSpam = (arr) => {
			//	1) Удалить все рекламные блоки со страницы (правая часть сайта)
		//Удаление элементов псевдомассива
		//вариант номер 1. Использование forEach
		arr.forEach(item => { //Колбэк. Перебрали, удалили
			item.remove();
			});
		
			//вариант номер 2. Использование классической функции
		arr.forEach(function (item) { //безымянная функция
			item.remove();
		});
	};
//==================================================================
//----------ФУНКЦИЯ ИЗМЕНЕНИЯ ЖАНРА----------
	const makeChanges = () => {
		//2) Изменить жанр фильма, поменять "комедия" на "драма"
		genre.textContent = "драма";
		//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
			//Вариант 1
		poster.style.backgroundImage = "url('img/bg.jpg')"; //Путь пишем относительно html!!!
		//Вариант 2
		poster.style.cssText = "background-image: url('img/bg.jpg')";
	};
//==================================================================
//----------ФУНКЦИЯ СОРТИРОВКИ----------
	const makeSort = (arr) => {
	//2.сортируем по алфавиту список в movieDB
		arr.sort();
	};
//==================================================================
//----------КОМБИНИРОВАННАЯ ФУНКЦИЯ ----------
//----------УДАЛЕНИЕ HTML ЭЛЕМЕНТОВ, УДАЛЕНИЕ ОБЪЕКТОВ, ----------
	function createMovieList(films, parent) { //films - фильмы с которыми будет работать функция, какой родительский блок на странице будет использовать все эти фильмы
		parent.innerHTML = ''; // Опустошаем, элемент от всего вложенного, но при этом не удаляем его
		films.forEach((film, i) => {
			parent.innerHTML += 
			`<li class="promo__interactive-item">${i + 1}. ${film}
				<div class="delete"></div>
			</li>`;
		});
		//удаление объектов
		document.querySelectorAll('.delete').forEach((btn, i) => {//btn - каждая корзина, i -нумерация
			btn.addEventListener('click', () => {
				btn.parentElement.remove();//удаляем родительский элемент
				movieDB.movies.splice(i, 1);//i - номер с которого нужно начать, 1 - сколько элементов нужно удалить
				createMovieList(films, parent);
			});
		});
	}
//==================================================================
//----------КОМБИНИРОВАННАЯ ФУНКЦИЯ ----------
//----------ПРОВЕРКА ИНПУТ ВВОДА, УКОРАЧИВАНИЕ, ПЕРЕМЕЩЕНИЕ В БД ----------
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		 let newFilm = input.value;
		 const favorite = checkbox.checked;
		if (newFilm) { //если пустая строка то false и условие не выполнится
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
				newFilm = newFilm.slice(0, 22) + ('...');// мой, альтернативный вариант
			}
			movieDB.movies.push(newFilm);	//помещаем фильм в БД
			makeSort(movieDB.movies);
			createMovieList(movieDB.movies, movieList);
		}
		form.reset();
		//event.target.reset(); -альтернативный вариант очистки
	});
	/*пояснение:
	submith -отслежевание отправки формы
	event.preventDefault(); - отменяем перезагрузку браузера(ajax)
	value - содержится то, что ввёл пользователь
	узнаём поставил ли пользователь галочку checkbox.checked(true, false);
	*/
	
//================================================================== 
	//Вызываем наши функции:
	deleteSpam(spam);
	makeChanges();
	makeSort(movieDB.movies);
	createMovieList(movieDB.movies, movieList);




	/*
	------мой вариант решения:------
	btn.addEventListener('click', addToMovies);


	function addToMovies(event) {

	event.preventDefault();

	let val = input.value.toLocaleUpperCase(); // получаем из input и сразу делаем всё uppercase

	input.value = ''; // очищаем value
	if (val != false) {
		if(val.length > 21){
			val = val.slice(0, 21) + '...';
		}
		movieDB.movies.push(val); //закидываем данные из инпута в массив
		movieDB.movies.sort();// сортируем массив
	}
	movieList.innerHTML = ''; //удаляем всё из массива
	movieDB.movies.forEach((film, i) => { 	 //добавляем в массив
		movieList.innerHTML += 
		`<li class="promo__interactive-item">${i + 1}. ${film}
			<div class="delete"></div>
		</li>`;
	});
	console.log(movieDB.movies ); // смотрим массив в консоле
	}



	//начала блока с удалением(нерешено)
	trashcan.forEach(item => {
	console.log(item);
	item.addEventListener('click', console.log('hello'))
	});

	*/
});