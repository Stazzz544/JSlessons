
window.addEventListener('DOMContentLoaded', () =>{

	// РЕАЛИЗАЦИЯ ТАБОВ
	const parentTabs = document.querySelector('.tabheader__items'),
			tabContent = document.querySelectorAll('.tabcontent'),
			tabs = document.querySelectorAll('.tabheader__item');

			hideContent();
			showContent(0);

			parentTabs.addEventListener('click', e => {
				const target = e.target;
				if (target.className == 'tabheader__item'){
					tabs.forEach((e, i) => {
						if (target == e) {
							console.log(i);
							hideContent();
							removeActiveClass();
							addActiveClass(i);
							showContent(i);
						}
					});
				}
			});

			function hideContent() {
				tabContent.forEach(e => {
					e.style.display='none';
				});
			}

			function showContent(num) {
				tabContent.forEach((e, i) => {
					if (i == num) {
						e.style.display='block';
					}
				});
			}

			function removeActiveClass() {
				tabs.forEach(e => {
					e.classList.remove('tabheader__item_active');
				});
			}

			function addActiveClass(num) {
				tabs.forEach((e, i)=> {
					if (i == num) {
					e.classList.add('tabheader__item_active');
				}});
			}

	//РЕАЛИЗАЦИЯ ТАЙМЕРА
	const deadline = '2021-06-07';
		function getTimeRemaining(endtime){//функция получения разницы между датами
			const t = Date.parse(endtime) - Date.parse(new Date()),//new Date - текущая дата
			days = Math.floor(t / (1000 * 60 * 60 * 24)), //Math.floor отбрасывает дробную часть
			hours = Math.floor((t / (1000 * 60 * 60) % 24)),
			minutes = Math.floor((t / 1000 / 60) % 60),
			second = Math.floor((t / 1000) % 60);
			// console.log(days, hours, minutes, second);
			return {//создаём и возвращаем объект
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'second': second,
			};
		}

		function getZero(num) { //добавляем к значениям таймера 0 перед числом если оно меньше 10
			if (num >= 0 && num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}

		//функция, которая будет устанавливать таймер на страницу
		function setClock(selector, endtime) {
			const timer = document.querySelector(selector),
					days = timer.querySelector('#days'),
					hours = timer.querySelector('#hours'),
					minutes = timer.querySelector('#minutes'),
					second = timer.querySelector('#seconds'),
					timeInterval = setInterval(updateClock, 1000);

			updateClock()//!!!ЗАПУСКАЕМ ТАЙМЕР ПЕРВЫЙ РАЗ ВРУЧНУЮ, ЧТОБЫ ТАЙМЕР НЕ МОРГАЛ!
			//функция обновления таймера раз в секунду
			function updateClock() {
				const t = getTimeRemaining(endtime); //рассчет времени, который остался на этот момент. в t попадёт объект return
				days.innerHTML = getZero(t.days);
				hours.innerHTML = getZero(t.hours);
				minutes.innerHTML = getZero(t.minutes);
				second.innerHTML = getZero(t.second);

				if (t.total <= 0) {
					clearInterval(timeInterval);//остановить интервал, когда дойдём до даты
				}
			}
		}

		setClock('.timer', deadline);

		
});
