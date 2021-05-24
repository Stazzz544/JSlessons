//Rest оператор собирает весь остаток и формирует из этого массив

const log = function(a, b, ...rest) {//назвать можно как угодно, не только rest
	console.log(a,b, rest);
}

log('basic', 'rest', 'operator', 'usage');//basic rest [ 'operator', 'usage' ] - часть у нас вывелось ка и ожидалось, остальное ушло в массив из-за rest оператора.

//bacic и rest - это a и b, первые обязательные аргументы
// Мы указали, что 2 агрумента у нас приходят 100%, остальне опционально


//Значение по умолчанию
//Вариант 1
function calcOrDouble(number, basis) {
	basis = basis || 2; //если basis не был передан - оператор || вернёт нам первую правду - 2
	console.log(number * basis);
}

calcOrDouble(3); //6

//Вариант 2
function calcOrDouble(number, basis = 2) {
	console.log(number * basis);
}

calcOrDouble(3); //6