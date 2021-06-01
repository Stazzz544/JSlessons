console.log('start...')

new Promise(function(resolve, reject) {
	setTimeout(() => {
		let stick = 'э';
		console.log(stick);
		resolve(stick);
	}, 1000);
}).then(function (item) {
		let newItem = item +'с';
		console.log(newItem);
		return newItem;
}).then(function (item) {
		let newItem = item +'т';
		console.log(newItem);
		return newItem;
}).then(function (item) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let a = item +'а';
			console.log('держим 3 секунды: ', a);
			resolve(a);
		}, 3000);
	});
}).then(function (item) {
		let newItem = itm +'ф'; //специальное место с ошибкой
		console.log(newItem);
		return newItem;
}).then(function (item) {
		let newItem = item +'е';
		console.log(newItem);
		return newItem;
}).then(function (item) {
		let newItem = item +'т';
		console.log(newItem);
		return newItem;
}).then(function (item) {
		let newItem = item +'а';
		console.log(newItem);
		return newItem;
}).catch(() => {
	console.log('error');//выполнится в случае ошибки
}).finally(()=> {
	console.log('finish');//выполнится вконце в любом случае
});



