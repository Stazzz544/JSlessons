'use strict';


// сначала обращаемся к document, позже мы сможем обращатся уже не к документу
// getElementById - самый частовстречающийся метод
// box - id с html страницы, обязательно в кавычках!
const box = document.getElementById('box');
console.log(box); // получаем элемент со страницы
// в консоле vs-cod это работать не будет, потому что
// объект document существует только внутри браузера


//получаем все кнопки со страницы в ПСЕВДОМАССИВ(HTMLcollection)!!!
const btns = document.getElementsByTagName('button');
console.log(btns);// - получаем HTMLcollection

//как получить отдельную кнопку:
//указываем индекс(вариант с целевым получением)
const btns2 = document.getElementsByTagName('button')[1];
console.log(btns2);//получаем элемент

//указываем индекс, если уже получили псевдомассив заранее
console.log(btns[3]);//получаем элемент
//========================================================
//!!!!!!!!!К массиву нельзя обратится и поменять, например цвет у кнопки внутри, необходимо обратится конкретно к кнопке
//console.log(btns); -    обращение к массиву
//console.log(btns[3]); - обращение к кнопке!
//========================================================

//Помимо тегов можно использовать КЛАССЫ
const circles = document.getElementsByClassName('circle'); //название класса прописывается без точки вначале
console.log(circles);// также как и с getElementsByTagName - получаем HTMLcollection

//Современный метод
const hearts = document.querySelectorAll('.heart');//ОБЯЗАТЕЛЬНА . ДЛЯ КЛАССА, # ДЛЯ ID ...
// В querySelectorAll() помещаем css селектор: #id, .класс, вложенность классов, псевдоклассы, атрибуты, комбинация всего этого, даже теги
//У querySelectorAll есть один метод - forEach в отличии от псевдомассивов(коллекций)
console.log(hearts);//Получаем псевдомассив NodeList 

//пробуем использовать forEach на  псевдомассиве
hearts.forEach(item => { //item - это каждый элемент, который находится в псевдомассиве
	console.log(item); //выводим поочередно
});

//получаем только 1 элемент
const oneHeart = document.querySelector('.heart'); // первый элемент, который попадает под сочетания этого селектора - мы и получим в переменную oneHeart
console.log(oneHeart);