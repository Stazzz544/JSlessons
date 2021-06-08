'use strick';

//==== ВСЕ МЕТОДЫ НИЖЕ ВОЗВРАЩАЮТ НОВЫЙ МАССИВ ====

//=================================================================
// filter - фильтрует элементы внутри массива

const names = ['Ivan', 'Ann', 'Ksenia', 'Vpldemart'];

//Получаем все имена, которые меньше чем 5 символов
const shortNames = names.filter(function(name) { //name - каждый элемент внутри массива
	return name.length < 5; //возвращаем те элементы, название которых менее 5 символов
});

console.log(shortNames); //[ 'Ivan', 'Ann' ]


//=================================================================
//map - берет исходный массив и изменяет каждый элемент внутри него

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => {
	return item.toLowerCase();
});

//const result = answers.map(item => item.toLowerCase()); - та же запись, но короче

console.log(result);//[ 'ivan', 'anna', 'hello' ]

//=================================================================
//some - переберает массив и если хотябы 1 элемент подходит по условию - он вернёт true, если нет - false

const someArray = [4, 'sfs', 'svsdvv'];
//проверяем есть ли в массиве хотябы одно число
console.log(someArray.some(item => typeof(item) === 'number')); 
//*** если мы не раскрываем скобки {} в callback ф-ции, то слово return подставляется автоматически

//=================================================================
//every - переберает массив и если ВСЕ элементы подходят по условию - он вернёт true, если нет - false
const everyArray = [4, 'sfs', 'svsdvv'];
//проверяем массив на условие
console.log(someArray.every(item => typeof(item) === 'number'));  //false, т.к. только один элемент число, а остальное строки

//=================================================================
//reduce - собирает массив в единое целое(схлопывает)
//у этого сетода есть 2 аргумента, которые подставляются автоматически
//первый - сумма всех наших 
//current - каждый элемент, который приходит от массива

//-----вариант с числами-----
const arr = [4, 2, 6, 8, 9, 5];
//получаем сумму всех переменных
const res = arr.reduce((sum, current)=> sum + current);//*можно  так же указывать начальное значение(3): => sum + current, 3);
console.log(res);// 34 - число!

//-----вариант со строками-----
const arr = ['apple', 'pear', 'coconut'];
//получаем сумму всех переменных
const res = arr.reduce((sum, current)=> sum + ', ' + current); // теперь можно добавить разделитель
console.log(res);// apple, pear, coconut - это всё одна строка


//=================================================================
//закрепляем (вытаскиваем именя людей)
const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: ' animal'
};

let newArr = Object.entries(obj); // метод делает из объекта массивы
console.log(newArr);//[[ 'ivan', 'person' ],[ 'ann', 'persone' ],[ 'dog', 'animal' ],[ 'cat', ' animal' ]]

let newArray = newArr.filter(item => item[1] === 'persone'); // возвращаем только те массивы, где второй элемент 'persone'
console.log(newArray);//[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]

let nameArr = newArray.map(item => item[0])
console.log(nameArr);//[ 'ivan', 'ann' ]

// можно записать короче и без доп переменных, по цепочке
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

