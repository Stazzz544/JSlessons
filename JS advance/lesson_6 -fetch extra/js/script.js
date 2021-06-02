// https://jsonplaceholder.typicode.com/
/*
const requestURL = 'https://jsonplaceholder.typicode.com/usrs'; // по этому URL мы будем делать запросы

const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL); //метод open открывает новое соединение
//первый параметр это метод (get, post ..), второй параметр - это URL(мы его добавили в переменную)

// GET - получение данных
// POST - СОЗДАНИЕ
// DELETE - ДЛЯ УДАЛЕНИЯ
// PUT - ДЛЯ ПОЛНОГО ОБНОВЛЕНИЯ ЭЛЕМЕНТА
// PATCH - ДЛЯ ЧАСТИЧНОГО ОБНОВЛЕНИЯ ЭЛЕМЕНТА





//ВАРИАНТЫ ПОЛУЧЕНИЯ ОТВЕТА(ПАРСИНГ)

//!!!ЕСЛИ ОТВЕТ ОТ СЕРВЕРА УСПЕШНЫЙ - ПОПАДАЕМ В .onload,
//А ЕСЛИ НЕТ - ТО В .onerror

// 1)
//чтобы вывести ответ в консоль - вешаем слушатель события
// получим строку (json)
xhr.onload = () => {
	console.log(xhr.response);
};
// 2)
// а вот так уже получим распарсенный объект(ы)
xhr.onload = () => {
	if (xhr.status >= 400) {//всё что больше 400 статуса - ошибки
		console.error(xhr.response);
	} else {
		console.log(JSON.parse(xhr.response));
	}
};
// 3)
// тут мы сразу просим, чтобы тип объекта, который придёт был json
//xhr.responseType = 'json';
//console.log(xhr.response);//получим сразу распарсеный готовый объект

//==ОБРАБОТКА ОШИБОК===
//если сервер даст ответ, из серии - такого пользователя в базе нет - то это не будет считаться ошибкой
// и мы не будем попадать в .onerror
xhr.onerror = () => {
	console.log(xhr.response);//получим ошибку, если она будет
}


//==ОТПРАВЛЯЕМ ЗАПРОС===
xhr.send();
// проверить успешность запроса можно во вкладке network -> XHR, ткнуть на файлик, который пришел
// и во вкладке Preview увидеть распарсеный объект


//НИЖЕ ПЕРЕПИСЫВАЕМ ТОЖЕ САМОЕ НА ПРОМИСАХ
*/
const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, url) {
	return new Promise((resolve, reject) => {
	const xhr = new XMLHttpRequest();

	xhr.open(method, url);

	xhr.responseType = 'json';

	xhr.onload = () => {
		if (xhr.status >= 400) {
			reject(xhr.response); //reject вызываем когда есть ошибка
		} else {
			resolve(xhr.response); // responce вызываем когда всё ок
		}
	};

	xhr.onerror = () => {
		reject(xhr.response); //reject вызываем когда есть ошибка
	};

	xhr.send();

	});
}

sendRequest('GET', requestURL)//метод sendRequest возвращаетн нам Promise
	.then(data => console.log('then:', data))
	.catch( err => console.log('err', err));