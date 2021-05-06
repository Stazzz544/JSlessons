/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const spam = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		btn = document.querySelector('button'),
		input = document.querySelector('.adding__input');



//	1) Удалить все рекламные блоки со страницы (правая часть сайта)
//Удаление элементов псевдомассива
//вариант номер 1. Использование forEach
spam.forEach(item => { //Колбэк. Перебрали, удалили
	item.remove();
});

//вариант номер 2. Использование классической функции
spam.forEach(function (item) { //безымянная функция
	item.remove();
});


//2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = "драма";


//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
//Вариант 1
poster.style.backgroundImage = "url('img/bg.jpg')"; //Путь пишем относительно html!!!
//Вариант 2
poster.style.cssText = "background-image: url('img/bg.jpg')";


//4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 

//1.удаляем старые вложенные элементы со страницы
movieList.innerHTML = ''; // Опустошаем, элемент от всего вложенного, но при этом не удаляем его

//2.сортируем по алфавиту список в movieDB
movieDB.movies.sort();

//3.формируем верстку при помощи js и помещаем ее на страницу
// - forEach - перебераем массив
// - film- каждый отдельный фильм из массива
// - i - номер по порядку
movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += 
 //`<li>${i + 1}. ${film}</li>`; //!!!!! += обязательно, если поставить просто =, то на каждой итерации знаение будет замещаться и в итоге будет только 1 элемент(последняя из списка)
 //movieList.innerHTML = movieList.innerHTML + `<li>${i + 1}. ${film}</li>`; - то же самое, что и выше!
 //снизу самый культурный вариант записи. просто берем верстку из html и докидываем переменные film и i
	`<li class="promo__interactive-item">${i + 1}. ${film}
		<div class="delete"></div>
	</li>`;
});


//////////////////////

btn.addEventListener('click', addToMovies);

function addToMovies(event) {
	event.preventDefault();
	let val = input.value;
	console.log(val);
	input.value = ''; // очищаем value
	if (val != false) {
		const size = 21;
		if(val.length > size){
			val.slice(0, 21)
		}
		movieDB.movies.push(val);
		movieDB.movies.sort();// работает частично
	}
	movieList.innerHTML = '';//удаляем
	 //добавляем в массив
	console.log(movieDB.movies );
	movieDB.movies.forEach((film, i) => {
		movieList.innerHTML += 
		`<li class="promo__interactive-item">${i + 1}. ${film}
			<div class="delete"></div>
		</li>`;
	});
}