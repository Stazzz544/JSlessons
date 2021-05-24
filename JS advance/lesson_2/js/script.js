/**
АСИНХРОННОЕ ВЫПОЛНЕНИЕ ЗАДАЧ НА СТРАНИЦЕ И ОБЗЕНИЕ С СЕРВЕРОМ
AJAX -async js anxml

AJAX запросы по умолчанию являются асинхронным кодом


*/
const inputRub = document.querySelector('#rub'),
		inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	const request = new XMLHttpRequest();
	//request.open(method, url, async, login, pass); метод для сбора настроек,которые в будущем помогут сделать запрос
	request.open('GET','js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
			//toFixed(2); - метод количества знаков после точки
		} else {
			inputUsd.value = 'поломОчка';
		}
	});//событие отслеживающее статус нашего запроса в текущий момент
	//СВОЙСТВА
	//status 404, 200 и т.д.
	//statusText ok, not faund ...
	//response - тут лежит тот ответ, который задал бэкэнд разработчик
	//readyState - текущее состояния запроса (цифра или слова), 4 это операция завершена и можем работать с данными

	//СОБЫТИЯ
	//load start
	//progress
	//abort
	//timeout
	//load end
	//readystatechange

	//тот же код но проще:
	request.addEventListener('loaded', () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
			//toFixed(2); - метод количества знаков после точки
		} else {
			inputUsd.value = 'поломОчка';
		}
	})
});