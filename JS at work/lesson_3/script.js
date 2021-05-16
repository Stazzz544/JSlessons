//Запуск функции через определённый промежуток времени

//принимает функцию, которая должна запустится через определённый промежуток времени(Название функции или анонимная функция)
const timerId1 = setTimeout(function() {
	console.log('hello');
}, 1000); //2000 - милисикунд (2 секунды)


//Вариант с дополнительными аргументами:
const timerId2 = setTimeout(function(text) {
	console.log(text);
}, 2000, 'hello world'); //2000 - милисикунд (2 секунды)

//hello world передаётся в function(text) и выводится в console.log(text)


//можно передать готовую функцию, без ()!
const timerId3 = setTimeout(logger, 3000);

function logger () {
	console.log('log text');
}

//можно не задавать setTimeout в переменную:
setTimeout(logger, 3000);


//СБРОС SETTIMEOUT
clearInterval(timerId1);//timerId1 - это уникальный идентификатор таймера


//Старт SETTIMEOUT после клика на кнопку
const btn = document.querySelector('.btn');
let timerId4, //пустая переменная, которой ничего не присваивается
	i = 0;

btn.addEventListener('click', () => {
	timerId4 = setTimeout(logger, 1000);
});

//повторение циклически раз в определённое время
//Технически всё как у setTimeout

//const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
	timerId4 = setInterval(logger, 1000);
});

//Интервал с итератором(i объявлен выше),чтобы выключить его после третьего цикла
btn.addEventListener('click', () => {
	
	timerId4 = setInterval(stopEnterval, 1000);
});

function stopEnterval() {
	if (i === 2) {
		clearInterval(timerId4);
	}
	console.log('останови меня!');
	i++;
}


//рекусивный вызов setTimeout(работает как и setInterval, но в отличии от него код  ждёт строгоопределённое время!)
let id = setTimeout(function log() {
	console.log('Hello');
	//вызов таймаута внутри таймаута
	id = setTimeout(log, 500);
}, 500);



//пишем анимацию для квадрата
const btn = document.querySelector('.btn');
let timerId,
	 i = 0;

function myAnimation() {
	const elem = document.querySelector('.box'); //получили квадрат со страницы
	let pos = 0; //переменная позиции элемента откуда будет всё стартовать и изменяться

	const id = setInterval(frame, 10);
//frame -функция которая будет выполсятся в интервале
//10 - сам интервал (0 по умолчанию не ставится. Сам браузер подставит туда какое-то минимальное значение, но не ноль)


	function frame() {//функция, котор. будет запускаться через определённый промежуток времени
		if (pos == 300) {//анимация закончится, когда pos === 300
			clearInterval(id);
		} else {
			pos++;//увеличива переменную отвечающую за позичия на 1 каждый цикл
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);