"use strict";

//ПРОМИСЫ(обещания)
//если произошло чо-то - то мы обещаем что у нас выполнится следующее действие

console.log('Запрос данных');//синхроннный код

//Промис принемает 2 аргумента resolve и reject(это функции)
// resolve - что то выполнилось правильно
// reject - значит что обещание не выполнилось и что-то пошло не так
const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Подготовка данных'); //Подготовка данных
	
		const product = {
			name: 'TV',
			price: 2000
		};
	
		resolve(product);
	}, 2000);
});


//then - метод выполняющийся на промисе в случае положительного исхода
req.then((product) => {
	const req2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
			//reject() - можем вызвать и тогда получим "произошла ошибка" из catch
		}, 2000);
	});

	req2.then(data => {
		console.log(data);//{ name: 'TV', price: 2000, status: 'order' }
		data.modyfy = true;
		return data;
	}).then((data) =>{
		console.log(data);//{ name: 'TV', price: 2000, status: 'order', modyfy: true }
	}).catch(() => {
		console.error('произошла ошибка');
	}).finally(() => {
		console.log('успех!');// выведет в любом случае
	});
});


const test = time => {
	return new Promise(resolve => {//в этом тестовом коде reject нам не нужен(не пишем)
		setTimeout(() => resolve(), time);// resolve отработает с задержкой time
	});
};
test(1000).then(() => console.log('1000'));
test(2000).then(() => console.log('2000'));
//очередность выполнения:
//1000
//2000


//метод Promise.all - служит для того, чтобы мы убедились, что все промисыуже выполнились, например если следали несколько запросов
//на разные сервера и ждём чтобы все они ответили(сервера отвечают с разным промежутком времени)
//Во внутрь передаётся массив с промисами
//и потом они обрабатываются с помощью then

const test = time => {
	return new Promise(resolve => {//в этом тестовом коде reject нам не нужен(не пишем)
		setTimeout(() => resolve(), time);// resolve отработает с задержкой time
	});
};

Promise.all([test(1000), test(2000)]).then(() => {
	console.log('all');
});
//через 2 секунды веведется all. Т.е. мы дождались наибольшей задержки во времени (2000мс) и после этого вывели результат.



//метод Promise.race - какой из промисов выполнится первее - и после этого мы сразу выполняем код в race
const test = time => {
	return new Promise(resolve => {//в этом тестовом коде reject нам не нужен(не пишем)
		setTimeout(() => resolve(), time);// resolve отработает с задержкой time
	});
};

Promise.race([test(1000), test(2000)]).then(() => {
	console.log('all');
});
//через секунду повистя all, так как быстрее выполнится промис с задержкой 1000мс