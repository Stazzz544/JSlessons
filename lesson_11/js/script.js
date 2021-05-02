"use strict";


//Полочение длины строки или количества элементов в массиве
const str = "test";
console.log(str.length); // 4

const arr = [1, 2, 5, 7, 8];
console.log(arr.length); // 5

//получение символа по порядку
const str = "test";
console.log(str[3]);// t

const arr = [1, 2, 5, 7, 8];
console.log(arr[4]);// 8


//метод замены, который не работает. Ошибка новичков
const str = "test";
console.log(str[2] = 'd');// d
console.log(str);// text

//Метод превратить буквы в заглавные
const str = "test";
console.log(str.toLocaleUpperCase());// TEST , не забыть поставить скобки в конце ()
console.log(str);// test


//Метод люратить текст в нижний регистр
const str = 'teSt';
console.log(str.toLowerCase());// test
console.log(str);// teSt


//Метод, который позволяет найти кусочек строки и сказать с какой позиции она начинается
//или поиск подстроки
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); // 5 - искомое начинается с 5 индекса
console.log(fruit.indexOf('q'));// -1 - это значет, что такой кусочек строки не был найден


//slice - получить часть строки введя начальный индекс и завершающий индекс символа
const logg = 'hello world';

console.log(logg.slice(6, 11));// world в первом элементе указываем с какого элемента начинаем
console.log(logg.slice(6, 10));// worl - во втором элементе мы указываем тдо какого момента, но не включая его
console.log(logg.slice(6));// word - указав начальный аргумент и не указав конечный строка будет вырезана до конца
console.log(logg.slice(-5, -1));//worl


//substring - по сути то же самое, что и slice
const logg = 'hello world';
console.log(logg.substring(6, 11));//world
console.log(logg.substring(-6, 11));//hello world - не поддерживает отрицательные значения, -6 будет интерпритироваться как 0


//substr по сути как slice и substring , НО вторым аргументом указываем длину строки
const logg = 'hello world';
console.log(logg.substr(6, 5));// world - (6- с какого символа, 5 - сколько символов взять после шестого)


//=======ЧИСЛА=========
//В JS есть встроенная библиотека Math


//Math.round округляет к ближайшему целому числу
const num = 12.2;
console.log(Math.round(num));// 12


//parseInt -переводит число в другую систему исчисления
const test = '12.8px';
console.log(parseInt(test));//12 - при этом это будет числовой тип данных, но то, что за точкой уберется(не округление!)

//parseFloat
const test = '12.2px';
console.log(parseFloat(test));//12.2 - как parseInt, но только с сохранением значений после точки.