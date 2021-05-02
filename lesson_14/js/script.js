//методы объектов

const obj = new Object(); // способ создать объект, которым не пользуются


//нормальный способ создавать объекты (ниже)
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

console.log(options.name); //test

//удаление из объекта

delete options.name;
console.log(options); // { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

//перебрать все свойства объекта

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

for (let key in options) {//будем копаться в options
	console.log(`свойство ${key} имеет значение ${options[key]}`); // перебераем объекты
}
//свойство name имеет значение test
//свойство width имеет значение 1024
//свойство height имеет значение 1024
//свойство colors имеет значение [object Object] - т.е. js не может превратить объект в строку - он выдаёт object(строковое представление объекта)
//or (let key of options)  - of для объектов работать не будет


//Способ достучаться до вложенного объекта, чтобы не было object Object
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

for (let key in options) {//будем копаться в options
	if (typeof(options[key]) === 'object') {
		for(let i in options[key]) {
			console.log(`вложенное свойство ${i} имеет значение ${options[key][i]}`)
		}
	} else {
		console.log(` свойство ${key} имеет значение ${options[key]}`); // перебераем объекты
	}
}
//свойство name имеет значение test
//свойство width имеет значение 1024
//свойство height имеет значение 1024
//вложенное свойство border имеет значение black
//вложенное свойство bg имеет значение red



//Способ достучаться до вложенного объекта
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

console.log(options["colors"]["border"]); //black


//приём счетчика

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

let counter = 0;//переменная счетчик
for (let key in options) {//будем копаться в options
	if (typeof(options[key]) === 'object') {
		for(let i in options[key]) {
			console.log(`вложенное свойство ${i} имеет значение ${options[key][i]}`)
			//counter++; если хотим поссчитать влоденные, но тогда мы не поссчитаем сам colors (5)
		}
	} else {
		console.log(` свойство ${key} имеет значение ${options[key]}`); // перебераем объекты
		counter++;// colors не учтётся (3)
	}
}
console.log(counter);


//классический способ поссчитать количество свойств в объекте:
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

let counter = 0;
for (let key in options) {
	counter++;
}

console.log(counter); //(4) , то есть всё, но без вложенности


//object keys

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};
 //Object.keys - метод берёт объект и на его основе создаёт массив в котором все элемнты это ключи, находящиеся на первом уровне вложенности объекта
console.log(Object.keys(options));//[ 'name', 'width', 'height', 'colors' ] получили массив со всеми ключами
console.log(Object.keys(options).length);// 4



//методы в объектах
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},

	makeTest: function() { //метод, который будет работать внутри options
		console.log("Test");
	}
};

options.makeTest(); //Test - запуск метода


//Деструктуризация объекта

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

const {border, bg} = options.colors; // деструктуризация - вытаскивание кусочков из объектов в качестве отдельных переменных
console.log(border);//black