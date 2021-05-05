"use strict";
//1)
let x = 5; console.log(++x); // 6
let x = 5; console.log( x++ ); //5 , так как  ++ справа от переменной - сначала будет аллерт с 5,
//а после x станет 6, так как это постфиксная запись. а вот если бы ++x - то в алерте было бы сразу 6

//2)

[] + false - null + true;
//разбираем
console.log([] + false);         //fale
console.log(typeof([] + false)); //string
//когда мы работаем с пустым  массивом он будет приведён к строковому типу данных, к пустой строке: console.log("" + false)
//а когда строка складывается с любым типом данных то мы получаем строку
a = "" + null + 921 + false;
console.log(a); //null921false - строка из всей фигни
console.log(typeof(a));//string
//если же мы вычитаем при нематематической операции то получим NaN
console.log([] + false - null + true);//         NaN
console.log(typeof([] + false - null + true));// number

//3
let y = 1;
let x = y = 2; // присвоение идёт справа на лево (последовательое присваивание)
console.log(x); // 2

//4
console.log([] + 1 + 2); // "12"
console.log(typeof([] + 1 + 2)); // string
//но!!!!!
console.log([] + 1 - 2); // -1
console.log(typeof([] + 1 - 2)); // number

//5
console.log( "1"[0]);// 1 - тут мы обращаемся к нулевому индексу в строке: 1
console.log( "1"[1]);// undefined

//6
//Чему равно  2 && 1 && null && 0 && undefined
console.log(2 && 1 && null && 0 && undefined); //null
//оператор && (и) всегда запинается на лжи, оператор || (или) всегла запинается на правде
//2 - true, 1 - true, null - false!!! && возвращает null! (как return)
//тест 2 для наглядности
console.log(2 && 1  && 0 && undefined && null); //0
console.log(null || false || undefined || 342 || undefined);//342
//null false undefined - false, 342 - true

//7
console.log(!!(a && b) и (a && b));
console.log(!!(1 && 2) === (1 && 2));//false , так как !! превращает выражение в булинов тип, а буль не равен (1 && 2)
console.log(1 && 2)//2

//8
console.log(null || 2 && 3 || 4);//3 
//когда мы не уверены какой из операторов сработает первым - смотрим таблицу преоритетов операторов JS
//У логического И &&   приоритет - 6
//У логического ИЛИ || приоритет - 5
// поэтому И(&&) сработает быстрее:
//когда оба элемента равны 2 && 3, то оператор вернет последнее значение - 3
console.log(null || 2 && -3 || 4); //-3 
console.log(null || 2 &&  0 || 4); // 4 
console.log(null || 0 &&  10 || 4); // 4 
// && запинается на лжи
// || запинается на правде

//9
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b);//false
console.log(a == b); //false
console.log(a[1] == b[1]); //true

//10
console.log( +"Infinity");         //Infinity
console.log(typeof( +"Infinity")); //number

//11
console.log("Ёжик" > "яблоко");//false
//посимвольное сравнение. Нужн использовать таблицу юникод 

//12
console.log(0 || "" || 2 || undefined || true ||false); // 2
// || запинается на правде. 2 - true