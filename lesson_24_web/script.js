
/*
обработчик события - это функция, которая срабатывает как только событие произошло
в JS всего 3 спосоа назначить обработчики событий

1.использовать HTML атрибут прямо в вёрстке:
***В РЕАЛЬНЫХ ПРОЕКТАХ ТАКОЙ КОД НЕ ИСПОЛЬЗУЕТСЯ.
***ПОДХОДИТ ДЛЯ ТЕСТОЫХ ПРОЕКТОВ ИЛИ МИНИ СКРИПТОВ
***ИНОГДА ТАКОЙ КОД ИСПОЛЬЗУЕТСЯ В МЕТРИКЕ(код для менеджеров и не шарящих людей)
<button onclick='alert("click")' id="btn">Нажми меня</button>
-событин - onclick
-обработчик - функция alert
*/

//2.Использовать свойства DOM дерева для событий
//*** В РЕАЛЬНЫХ ПРОЕКТАХ ПОЧТИ НЕ ИСПОЛЬЗУЕТСЯ, ТАК КАК ЕСТЬ ПРОБЛЕМЫ
// ЕСЛИ ЗАДУБЛИРОВАТЬ КОД - ТО ОН ПЕРЕЗАПИШЕТСЯ ТЕМ, ЧТО СЛЕДУЕТ НИЖЕ
// СОБЫТИЯ НАЗНАЧЕННЫЕ ПРИ ПОМОЩИ СИНТАКСИСА НИЖЕ НЕЛЬЗЯ УДАЛИТЬ

const btns = document.querySelectorAll('button'),   //получаем массивчек
		btn = document.querySelector('button'),       //получаем первую кнопку со страницы
		overlay = document.querySelector('.overlay'), //получаем родителя одной из кнопок
		btnInto = overlay.querySelector('button');    //получаем кнопку в родителе overlay

btn.onclick = function() {
	alert('click2');
}
//btn - тот элемент, на который хотим повесить событи
//используем свойство DOM дерева - onclick
//записываем в это свойтво какое-то значение
//Важное примечание! inline стиль перезаписывается! стиль в js важнее

//3 addEventListener - слушатель события

btn.addEventListener('click', () => {
	alert('click3');
});
//*Не перезаписывает действие, а добавляет еще одно!!!!
btn.addEventListener('click', () => {
	alert('click4');
});

//'click' - название события, дальше функция

//функция mouseenter
btn.addEventListener('mouseenter', () => {
	console.log('навёл мышку');
});


//ПОЛУЧИТЬ ДАННЫЕ О ЭЛЕМЕНТЕ С КОТОРЫМ МЫ ВЗАИМОДЕЙСТВУЕМ
//передача агрумента в функцияю
//чаще всего называют "event" или "e"

btn.addEventListener('mouseenter', (e) => {
	console.log(e); // получим MouseEvent и кучу данных по координатам и т.д.
});

//получить тег и всё что внутри
btn.addEventListener('mouseenter', (e) => {
	const a = (e.target); // получим MouseEvent и кучу данных по координатам и т.д.
	console.log(a);
	// console.log(e.target); - альтернативный вариант без присвоения значения переменной
});
//удалить при наведении
btn.addEventListener('click', (e) => {
	e.target.remove(); // удалить
});

//удаление событий!!!
//чтобы обратится к с
//2 массива идентичные по наполнению не равны друг другу
const deleteElement = (e) => {
	e.target.remove();
};

btn.addEventListener('click', deleteElement); // читаем код: после того, как выполнится клик по элементу - выполнится функция
btn.removeEventListener('click', deleteElement); // удаляем обработчик сразу после его назнчения


//альтернативый вариант
let i = 0;
const deleteElement1 = (e) => {
	console.log(e.target);
	i++;
	if (i == 1) {
		btn.removeEventListener('click', deleteElement1);
	}
};

btn.addEventListener('click', deleteElement1);


//ВСПЛЫТИЕ СОБЫТИЙ
//Сначала событие срабатывает на вложенном элементе, а затем на родителе(если он есть), затем поднимается вверх по иерархии

const deleteElement2 = (e) => {
	console.log(e.currentTarget); // событие на вложенном элементе сработает быстрее
	console.log(e.type);
};

overlay.addEventListener('click', deleteElement2); // сработает вторым 
btnInto.addEventListener('click', deleteElement2); // сработает первым

/*
ОТМЕНА СТАНДАРТНОГО ПОВЕДЕНИЯ БРАУЗЕРА - preventDefault
стандартное поведение это:
при клике переходим по ссылке,  при этом url будет браться из атрибута href
если нажать на кнопку у которой естьатрибут submith, то данные на сервер отправляются
к стандартному поведению относитя и выделение текста
*/

const link = document.querySelector('a');

link.addEventListener('click', (event) => { // link.addEventListener('click', function(event) { ...
	event.preventDefault(); //отменяем стандартное поведения перехода по ссылке(помещается в самое начало обработчика)
	console.log(event.target);//при клике на ссылку мы теперь не переходим по ней, а выполняем console.log(event.target);
});
//ВНИМАНИЕ, ЧАСТАЯ ОШИБКА НОВИЧКОВ
//на массиве(псевдомассиве, коллекции) обработчик не работает
//чтобы заработало - нужно перебрать весь массив и на каждый элемент навесить обработчик событий

btns.forEach(item => {
	item.addEventListener('click', deleteElement2, {once: true});
});

/*ОПЦИИ СОБЫТИЯ
addEventListener (type, listener [, options]);
type- тип события
listener - обработчик события
options - добавляем какие-то опции
		опции:
		once - говорим, что событие должно происходить только один раз(..и не надо громаздить конструкцию removeEventListener)
*/