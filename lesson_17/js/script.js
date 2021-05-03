"use strict";
// js объектно ориентированный язык

let str = "some";
let strObj = new String(str);

console.log(typeof(str));//    string
console.log(typeof(strObj));// object

//когда мы в js создаём примитивный объект строка и вызываем строковый метод
//на время вызова метода строка становится объектом, а после снова строкой
///////////////////////////////////////


const soldier = {//большой портотип, который описывает всех солдат
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('Hello')
	}
};

const jonh = {
	health: 100
};

//Наделяем объект jonh свойствами объекта soldier
//Устаревый способ
jonh.__proto__ = soldier;
console.log(jonh);//{ health: 100 }
console.log(jonh.armor);//100 - jonh получил свойство armor: 100 от объекта soldier
jonh.sayHello();//Hello

//Современный способ
Object.setPrototypeOf(jonh, soldier);
console.log(jonh);//{ health: 100 }
console.log(jonh.armor);//100 - jonh получил свойство armor: 100 от объекта soldier
jonh.sayHello();//Hello


//Создание объекта и сразу же наделение его свойствами главного объекта soldier
const jonh = Object.create(soldier);//мы создаём(Object.create) портотипный объект jonh, который будет наследоваться от soldier
jonh.sayHello();//Hello