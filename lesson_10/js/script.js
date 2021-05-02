"use strict";


//showFirstMessage название функции
//в куглые скобки передаются аргументы функций
//имя функции должно быть ГЛАГОЛОМ сс припиской к тому над чем выполняется действие
//showFirstMessage - показать -- первое сообщение

function showFirstMessage() {
	console.log("Hello World!");
}
showFirstMessage();


//Функция с передачей аргумента
function showFirstMessage(text) {
	console.log(text);
}
showFirstMessage("Hello World!");


//Может быть много аргументов
function showFirstMessage(text, arg, mmo, costom) {
}

//Переменные внутри функции
//локальная переменная
function showFirstMessage(text) {
	console.log(text);
	let num = 20;
}

showFirstMessage("hello world");
console.log(num); // так как num создана внутри функции - то она считается локальной и за пределами функции ее не видно


//глобальная переменная
let num = 20;
function showFirstMessage(text) {
	console.log(text);
	num = 10; // была создана шлобальная переменная num = 20, дальше она была использована внутри функции и была перезаписана
}

showFirstMessage("hello world");
console.log(num); //10

//Замыкание - это сама функция со всеми внешними переменными, которые ей доступны


//переиспользование функции
function calc(a, b) {
	return (a + b); // return позволяет вернуть значение функции во внешний мир
	console.log('print me')// это unreacheble код, так как функция заканчивается на return
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
	let num = 50;
	return num;
}

// сразу после функции такая запись работать не будет - console.log(num); 
const anotherNum = ret(); // anotherNum равен результату работы функции ret, а ret нам возвращает в качестве результата return - num, поэтому в anotherNum запишется 50, так как num = 50;
console.log(anotherNum);

//КЛАССИФИКАЦИЯ ФУНКЦИЙ

//

//1)function declaration
//функция существует еще до того как код запстится(как переменная var)
//можно поместить все функции вниз страницы, а сверху их просто использовать
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc(a, b) {
	return (a + b);
}//точку сзапятой ставить не нужно

//2)function expression - функциональное выражение
//создаётся только тогда, когда поток кода доходит до нее. можно вызвать только после объявления

const logger = function() {
	console.log('hello')
};//точку с запятой ставить нужно!!! т.к. мы создаём переменную

logger();//hello

//3) современный стандарт ES-6, стрелочная функция
// эта функция не имеет контекста вызова, поэтому эту функцию можно чаще встретить в обработчиках событий
// везде её испоьзовать нельзя
const calc = (a, b) => a + b; // это сокращенный вариант, можно использовать если код влезает в одну строчку
const calc = (a, b) => {return a + b;}; // классический вариант
console.log(calc(4, 3));

const calc = (a, b) => { // если функция большая, то она записывается так.
	console.log('1');
	return a + b;
};

