"use strict";

//ПРОМИСЫ(обещания)
//если произошло чо-то - то мы обещаем что у нас выполнится следующее действие

console.log('Запрос данных');//синхроннный код

//Промис принемает 2 аргумента resolve и reject(это функции)
// resolve - что то выполнилось правильно
// reject - значит что обещание не выполнилось и что-то пошло не так
const req = new Promise(function(resolve, reject){
	setTimeout(() => {

		console.log('Подготовка данных');
	
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
		}, 2000);
	});

	req2.then(data => {
		console.log(data);
	});
});



