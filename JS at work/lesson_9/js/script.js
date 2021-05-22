'use strict';


// КОНТЕКСТ ВЫЗОВА ФУНКЦИИ THIS

//Функция может вызываться четыремя способами



//1)Обычный вызов функции
function showThis() {
	console.log(this);
}
//если нет use strict:
showThis(); //в браузере получаем глобальный объект Window 
//если use strict включен:
showThis(); //undefined


//задачка с собеседования
function showThis1(a, b) {
	console.log(this);//undefined
	function sum() {
		console.log(this);//undefined
		return a + b;// 9 - у нас получилось замыкание, так как переменные нашлись на уровень выше
	}
	console.log(sum());
}

showThis1(4, 5);



//2 - методы объекта - это тоже функции
//Если мы используем метод внутри объекта, то контекст вызова будет ссылаться на этот же объект
const obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);
	}
};
obj.sum();//{a: 20, b: 15, sum: ƒ} - мы получили тот объект в котором находится этот метод

const obj1 = {
	a: 20,
	b: 15,
	sum: function() {
		function shout() {
			console.log(this);
		}
		shout();
	}
};
obj1.sum();//undefined - так как shout() - это простой вызов функции, а не метод объекта, это функция внутри 
//метода, поэтому она контекст потеряла.


//3  вызов через оператор new (функция конструктор)
//!!!ВЫУЧИТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//this в конструкторах и классах - это новый экземпляр объекта!

function User(name, id){
	this.name = name;
	this.id = id;
	this.human = true;
}
let ivan = new User('Ivan', 66);
let vasya = new User('Vasya', 122);
console.log(ivan);// User {name: "Ivan", id: 66, human: true}
console.log(vasya);//User {name: "Vasya", id: 122, human: true}




//4 Ручное присвоение this любой функции: call, apply, bind

function sayName () {
	console.log(this);
	console.log(this.name);
}

const user = {
	name: 'John'
};

//call и apply делают одно и тоже разница только в синтаксисе

sayName.call(user);//  {name: "John"}
//                     John
sayName.apply(user);// {name: "John"}
//                     John


//разница между call и apply видна, когда мы пытаемся передать дополнительные аргументы
function sayName (surname, old) {
	console.log(this);
	console.log(this.name + surname + old);
}

const user = {
	name: 'John'
};

//call и apply делают одно и тоже разница только в синтаксисе

sayName.call(user, ' Smith ' , 18);//  {name: "John"}
//                                      John Smith 18
sayName.apply(user, [' Oleg ', '22']);// {name: "John"}
//                                       John Oleg 22


//метод bind
//создаёт новую функцию связанную с определённым контекстом
//Функция удваивания
function count(num) {
	return this*num;
}

const double = count.bind(2)
console.log(double(6));// 12
console.log(double(16));// 32
//double - это новая функция у которой есть жестко привязанный контекст - цифра 2
// двойка передаётся в функцияю вместо this
//теперь в double мы можем передавать один аргумент, который будет всегда удваиваться(6)



//Немного правктики(в html есть кнопка)

//Когда в обработчике события функция написана в классическом виде - тогда
//контекстом вызова будет сам элемент, на котором произошло событие
//считай как event.target
//если будет стрелочное обращение - то будет ошибка, контекст будет потерян
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	console.log(this); // контекстом вызова является сам элемент на котором произошло событие
	this.style.backgroundColor = 'red'; // кнопке добавился бэкграунд
});


//У стрелочной функции НЕТ своего КОНТЕКСТА ВЫЗОВА
//она всегда будет брать его у своего родителя
const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this); //если бы тут была обычная функция - то this = undefined
		};
		say();
	}
};
obj.sayNumber();// {num: 5, sayNumber: ƒ}
//this ссылается на сам объект, так как берет у него контекст

const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this.num);
		};
		say();
	}
};
obj.sayNumber();// 5, если бы была обычная функция - то была бы ошибка
//this ссылается на сам объект, так как берет у него контекст




const double1 = (a) => {
	return a * 2;
};
//та же запись, но в одну строчку,
//если функция маленькая - то можно записать так:
const double2 = a => a * 2;// return использовать не нужно, оно подставится автоматически,
// так же если аргумент только 1 , то круглые скобки не нужны
console.log(double2(4));//8