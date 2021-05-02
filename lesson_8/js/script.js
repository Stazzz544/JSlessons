"use strict";

//Цикл while

let num = 50;

while (num <= 55) {
	console.log(num);
	num++;//увеличиваем num на 1 при помощи инкримента
}
//выведет числа с 50 по 55

//Второй вариант цикла
// - сначала заставляем цикл делать, а потом проверяем условия
//и если необходимо - выйти из цикла
let num = 50;

do {
	console.log(num);
	num++;
}
while (num <=55); //после того как цикл отработал проверяем условия при помощи while


//цикл for - самый частоиспользующийся цикл
for (let i = 1; i < 8; i++) {
	console.log (i);
}\

//for - условие, которое должно состоять из трёх аргументов
// i - сокращенно от итератор
//задаём то, что будет вначале нашего цикла, с чего его начинать - i = 1
//условия при котором нащ цикл остановится i < 8;
//записываем шаг цикла i++ - инкремент - i + 1
//console.log (i); действия на каждом этапе цикла 

for (let i = 1; i < 8; i++) {
	if (i === 6) {
		break;
	}
	console.log(i);
}
//цикл выведет с 1 по 6, хотя в первом условии < 8 ,так как работает условие break

for (let i = 1; i < 8; i++) {
	if (i === 6) {
		continue;
	}
	console.log(i);
}
//выведет цифры с 1 по 7, но 6 будет пропущена из-за оператора continue
//это нужно, если мы хотим избежать включение каких-то определённых значений 