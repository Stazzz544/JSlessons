"use strict";

let a = 5,
	 b = a;

b = b + 5;

console.log(b);// 10
console.log(a);// 5
///////////////////////////////////


//ПЕРЕДАЧА ПО ССЫЛКЕ
const obj = {
	a: 5,
	b: 1,
};

const copy = obj; // эта запись - это не копия с объекта, а передача ссылки на объект!!!!
copy.a = 10;
console.log(copy);// { a: 10, b: 1 }
console.log(obj);//  { a: 10, b: 1 }
//- изменяя что-то внутри copy мы изменили и объект obj


//СОЗДАНИЕ КОПИИ ОБЪЕКТОВ, МАССИВОВ И Т.Д. ,ГЛУБОКИЕ И ПОВЕРХНОСТНЫЕ
//Создание копии используя цикл (ПОВЕРХНОСТНАЯ КОПИЯ)
function copy(mainObj) {
	let objCopy = {};
	let key;
	for(key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}
//copy - название функции, mainObj - аргумент функции, который мы будем передавать
//функция создаст новый объект при помощи цикла, переберая свойства, которые были в изначальном объекте
//let objCopy = {}; - создаём копию
// for in - переберающая конструкция
//[key] - создаём новое свойство внутри objCopy 
//mainObj[key]; - делаем копию с главного объекта. Проходимся по старому объекту,
// копируем все свойства, которые там есть и поместим их в новую копию, которая изначально была пуста
//return objCopy - возвращаем копию наружу

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);
console.log(newNumbers);//{ a: 2, b: 5, c: { x: 7, y: 4 } }

//пробуем произвести замену ПОВЕРХНОСТНОГО свойства в newNumbers
newNumbers.a = 8;
console.log(newNumbers);//{ a: 8, b: 5, c: { x: 7, y: 4 } } замена ПОВЕРХНОСТНОГО свойства успешна
console.log(numbers)//    { a: 2, b: 5, c: { x: 7, y: 4 } } объект numbers затронут не был
//пробуем произвести замену ГЛУБОКОГО свойства в newNumbers(проральная)
newNumbers.c.x = 10;
console.log(newNumbers);//{ a: 8, b: 5, c: { x: 10, y: 4 } } замена ГЛУБОКОГО свойства провалилась
console.log(numbers)//    { a: 2, b: 5, c: { x: 10, y: 4 } }    :(



//СОЕДИНЯЕМ НЕСКОЛЬКО ОБЪЕКТОВ. Метод Object.assign
const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const add = {
	d: 17,
	e: 20
};
//соединяем объект add с объектом numbers.
//создаём независимую поверхностную копию объекта, она независит ни от add, ни от numbers
const clone1 = Object.assign(numbers, add);
console.log(clone1); // { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }
//первый аргумент - объектв В КОТОРЫЙ мы хотим поместить. второй оргумент - помещаемый объект
const clone2 = Object.assign({}, add);// { d: 17, e: 20 }
clone2.d = 20;
console.log(add);//    { d: 17, e: 20 } - изначальный объект не изменился!
console.log(clone2);// { d: 20, e: 20 } - клонированный объект благополучно изменился
// в клоне лежит поверхностная копия предыдущего объекта



//СОЗДАЁМ КОПИЮ МАССИВА
const oldArray = [ 'a', 'b', 'c'];
const newArray = oldArray.slice(); // метод копирует старый массив
console.log(oldArray);//[ 'a', 'b', 'c' ]
console.log(newArray);//[ 'a', 'b', 'c' ]
newArray[1] = 'абракадабра';
console.log(oldArray);//[ 'a', 'b', 'c' ]
console.log(newArray);//[ 'a', 'абракадабра', 'c' ]


const newArray = oldArray; //В ЭТОМ СЛУЧАЕ МЫ ПОЛУЧИМ ССЫЛКУ НА МАССИВ, А НЕ КОПИЮ!


//МЕТОДЫ ИЗ ES-6 И ES-8
//Оператор разворота - spread оператор
//получаем в массив internet данные из  массива video и массива blogs

const video = ['youtube', 'vimeo', 'rutube'],
		blogs = ['wordpress', 'livejournal', 'blogger'],
		internet = [...video, ...blogs, 'vk', 'facebook'];//...разворачивает структуру на отдельные значения

	console.log(internet);
//[
//	'youtube',
//	'vimeo',
//	'rutube',
//	'wordpress',
//	'livejournal',
//	'blogger',
//	'vk',
//	'facebook'
// ]


//второй пример(немного сложнее)
function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5 ,7]
//пояснение:
//функция log принимает 3 отдельных аргумент, а нам нужно положить из массива элементы по отдельности в a, b и c
//это можно сделать используя spread оператор:
log(...num);// - массив num разложится на 3 отдельных элемента и консоль выведет всё по отдельности
//2
//5
//7



//Создание ПОВЕРХНОСТНОЙ копии массива через spread ... оператор

const array = ['a', 'b']; //изначальный объект
const newArray = [...array]; //создана копия объекта

//Создание ПОВЕРХНОСТНОЙ копии объекта через spread ... оператор
const obj ={
	one: 1,
	two: 2
};

const newObj = {...obj};
console.log(newObj);//  { one: 1, two: 2 }

newObj.one = 3;
console.log(newObj);//  { one: 3, two: 2 }
console.log(obj);//     { one: 1, two: 2 }