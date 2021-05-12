"use strict";

//Конкотенация
console.log('arr' + ' - object') // arr - object
console.log(4 + ' - object'); // 4 - object
console.log(4 + +' - object'); // NaN, т.к. пытаемся object прибавить к 4 ввиде числа
console.log(4 + +'8'); // 12 - строка 8 приведена к числоу 8 (унарный плюс - плюс который ставится перед чем-то +'8')

//инкримент и дикримент
//нужны для укорачевания кода, увеличивают и уменьшают значение на 1

let incr = 10,
	 decr = 10;

	//постфиксная форма записи
incr++; //увеличение значения на 1
decr--; //уменьшение значени на 1
   //префиксная форма записи:
//++incr;
//--decr;

console.log(incr); // 11
console.log(decr); // 9


//целочисленное деление %
console.log(5%2);

//оператор = == ===
console.log(2 * 4 == 8); //true
console.log(2 * 4 == '8'); //true , так как мы сравниваем только по значению, а не по типу данных
console.log(2 * 4 === '8'); //false , так как сравнивается ещё и тип данных, число не равно  строке (строгое сравнение)

//оператор отрицания !=
console.log(2 * 4 != 6); //true, 8 не равно 6
console.log(2 * 3 != '6'); //false, так как js приводит строку 6 к числу 6
console.log(2 * 3 !== '6'); // true, так как число 6 не равно строке 6 по типу

const isChecked = false,
		isClose = false;
console.log(isChecked || !isClose);//true Благодаря оператору отрицания isClose превратилось в true

//оператор И(&&) и ИЛИ(||)
//оператор && работает только тогда, когда у нас 2 или более подопытных являются правдивыми выражениями

let isChecked = true,
		isClose = true;

console.log(isChecked && isClose); // true

const isChecked = false,
		isClose = true;

console.log(isChecked && isClose); // false

//оператор || работает только тогда, когда хотя бы 1 подопытный true

const isChecked = true,
		isClose = false;

console.log(isChecked || isClose); // true, так как хотябы один аргумент true

const isChecked = false,
		isClose = false;

console.log(isChecked || isClose); // false, так как оба false

const isChecked = false,
		isClose = false;
console.log(isChecked || !isClose); //true Благодаря оператору отрицания isClose превратилось в true
//Порядок выполнения операторов

console.log(2 + 2 * 2 == 8) // false , так как сначала умножение, а потом сложение