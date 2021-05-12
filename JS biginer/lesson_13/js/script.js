"use strict";


//callback функции


function first() {
	//do something
	setTimeout(function() {
		console.log(1);
	},500);
}

function second() {
	console.log(2);
}

//! ЕСЛИ ФУНКЦИИ ИДУТ В КОДЕ ОДНА ЗА ДРУГОЙ - ЭТО НЕ ЗНАЧИТ, ЧТО ОНИ ВЫПОЛНЯЮТСЯ ТАК ЖЕ.
// ОНИ ЗАПУСКАЮТСЯ ОДНА ЗА ДРУГОЙ, НО РЕЗУЛЬТАТ МОЖЕТ ПРИЙТИ ЧЕРЕЗ РАЗНОЕ ВРЕМЯ
first();
second();


//callback функции - это функция которая должна быть выполнена сразу после того как другая функция завершила своё выполнение
//в другую функцию в качестве аргумента мы можем передать другую функцию
function learnJS(lang, callback) {
	console.log(`я учу: ${lang}`);
	callback();//только после того как выполнится действия от первой функции - запустится вторая функция
}

learnJS('JavaScript', function() { //function() {console.log('я прошел этот урок')} - анонимная функция (аргумент)
	console.log('я прошел этот урок')// анонимная фнкция после выполнения исчезнет
});

//==============
function done() {
	console.log('я прошел это урок!')
}

function learnJS(lang, callback) {
	console.log(`я учу: ${lang}`);
	callback();
}

learnJS('JavaScript', done); //done без круглых скобок!!!