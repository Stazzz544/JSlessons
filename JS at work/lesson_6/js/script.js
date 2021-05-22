
"use strick";

const box = document.querySelector('.box'),
		btn = document.querySelector('button');


//получаем ширину и высоту элемента без учета margen-оф и border-ов


//В мобильной версии браузера БЕЗ box-sizing: border-box
console.log(width);// 420 , хотя по css размер 400px,  20px - это скролл
console.log(height);// 370 , хотя по css размер 350px,  20px - это скролл
//В обычной версии браузера
console.log(width);// 403 , хотя по css размер 400px,  3px - это скролл
console.log(height);// 354 , хотя по css размер 350px,  4px - это скролл


//В мобильной версии браузера  С box-sizing: border-box
console.log(width);// 400 , по css размер 400px,  размер скролла не добавился
console.log(height);// 350 , по css размер 350px,  размер скролла не добавился

//В обычной версии браузера  С box-sizing: border-box
console.log(width);// 383 , хотя по css размер 400px,  17px - это скролл (съел часть размера)
console.log(height);// 334 , хотя по css размер 350px,  16px - это скролл (съел часть размера)




//получение того же контента но уже с учётом полосы прокрутки + border и margin

const width = box.offsetWidth;
const height = box.offsetHeight;
//В мо,ильной версии браузера БЕЗ box-sizing: border-box
console.log(width);// 420 , по css размер 400px,  20px - это скролл (ДОБАВИЛ часть размера)
console.log(height);// 370 , по css размер 350px, 20px - это скролл (ДОБАВИЛ часть размера)
//В обычной версии браузера всё так же как и в мобильной


//В мобильной версии браузера С box-sizing: border-box
console.log(width);// 400 , по css размер 400px,  размер скролла не добавился
console.log(height);// 350 , по css размер 350px,  размер скролла не добавился
//В обычной версии браузера всё так же как и в мобильной

// ***350px - это только видимая часть скролла(высоты блока), сам скролл может быть сильно длиннее



//реальная высота и шири всего скролла
//В мобильной версии браузера БЕЗ box-sizing: border-box
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width);//420
console.log(height);//1750

//В обычной версии браузера БЕЗ box-sizing: border-box
console.log(width);//403
console.log(height);//1805

//В мобильной версии браузера C box-sizing: border-box
console.log(width);//400
console.log(height);//1823

//В обычной версии браузера C box-sizing: border-box
console.log(width);//383
console.log(height);//1915



//расскроем по клику  наше окно которое по css height: 400px. 
btn.addEventListener('click', () => {
	box.style.height = box.scrollHeight + 'px';
});
//из наблюдений - если стоит box-sizing: border-box - то немного скролла всё таки останется, 
//если же box-sizing: border-box нет, то всё скролла не будет(полоска останется но высота блока станет во весь контент)



//scrollTop - сколько мы отлистали от верха (в данном случае от верха блока со скроллом box), по клику нам будут выдавать значения
btn.addEventListener('click', () => {
	console.log(box.scrollTop);
});



//координаты элемента на странице
//получить все координаты у элемента, левая, правая, нижняя и верхняя граница
console.log(box.getBoundingClientRect());
//В JS ВСЕ КОРДЫ СЧИТАЮТСЯ ОТ ВЕРХНЕГО И ЛЕВОГО КРАЯ!!! Т.Е. right - это 969.6000366210938 от ЛЕВОГО КРАЯ! И left: 549.6000366210938 ТОЖЕ ОТ ЛЕВОГО КРАЯ!!! bottom И top АНАЛОГИЧНО
bottom: 420
height: 370
left: 549.6000366210938
right: 969.6000366210938
top: 50
width: 420
x: 549.6000366210938
y: 50

//получить только top
console.log(box.getBoundingClientRect().top);


//Получить стили тега
const style = window.getComputedStyle(box);
console.log(style); // получим огромный компьютед стайл - всех свойств, которые применены на нах блок box
console.log(style.display); // получим только стостояние свойства display - в консоли просто block
//ВАЖНО!!!
//1) При помощи этого метода можно получить стили псевдоэлемента
//(при помощи js мы не можем работать с псевдоэлементами, мы не можем их получить со страницы)
const style = window.getComputedStyle(box, after); - пример получения
//2) ComputedStyle это не тоже самое что inline Style. ComputedStyle идут из CSS

//получить количество пикселей, которое пользователь отлистал на нашей странице
console.log(document.documentElement.scrollTop);

//можно модифицировать scrollTop, при клике нас перенесёт наверх
btn.addEventListener('click', () => {
	document.documentElement.scrollTop = 0;
});


//scrollBy Проскролить от ТЕКУЩЕГО МЕСТОПОЛОЖЕНИЯ на 20 пикселей вверх(так как -20), если хотим вниз - то значение должно быть положительным
window.scrollBy(x, y);
btn.addEventListener('click', () => {
	window.scrollBy(0, -20);
});


// scrollTo Проскролить от ВЕРХА страницы на 70px вниз
btn.addEventListener('click', () => {
	window.scrollTo(0, 70);
});