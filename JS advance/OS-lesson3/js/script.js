
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

			updateClock();//!!!ЗАПУСКАЕМ ТАЙМЕР ПЕРВЫЙ РАЗ ВРУЧНУЮ, ЧТОБЫ ТАЙМЕР НЕ МОРГАЛ!
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

		//==========Modal============
		const modalTrigger = document.querySelectorAll('[data-modal]'),
				modal = document.querySelector('.modal'),
				modalClose = document.querySelector('[data-close]');

		
		modalTrigger.forEach((e) => {
			e.addEventListener('click', () => {
				addClassShow(modal);
				bodyLock ();
				clearInterval(modalTimerId);
			});
		
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				removeClassShow(modal);
				bodyFree();
			}
		});

		document.addEventListener('keydown', (event) => {
			if (event.code == 'Escape' && modal.classList.contains('show')) {
				removeClassShow(modal);
				bodyFree();
			}
		});
	
		modalClose.addEventListener('click', () => {
			removeClassShow(modal);
			bodyFree();
			});
		});
		
		


		function bodyLock () {
			document.body.style.overflow = 'hidden';
		}

		function bodyFree () {
			document.body.style.overflow = 'auto';
		}

		function addClassShow (item) {
			item.classList.add('show');
		}

		function removeClassShow (item) {
			item.classList.remove('show');
		}
		function openModal(){
			addClassShow(modal);
		}

		//таймер вызова модального окна
	
		//const modalTimerId = setTimeout(openModal, 12000);
		/*
		делаем появление модалки при долистывании до низа страницы
		 складываем свойство которое отвечает за прокрученную часть(pageYOffset), складываем со свойством которое отвечает за высоту клиента(document.documentElement.clientHeight видимая часть) и сравним ее scrollHeight(с полной прокруткой)
		 */
		
		window.addEventListener('scroll', showModalByScroll);

		function showModalByScroll() {
			if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
				openModal();
				window.removeEventListener('scroll', showModalByScroll);
			}
		}

		//cards (классы)
		class MenuCard {
			constructor(src, alt, title, descr, price, parentSelector, ...classes) {
				this.src = src;
				this.alt = alt;
				this.title = title;
				this.descr = descr;
				this.price = price;
				this.classes = classes;//массив
				this.parent = document.querySelector(parentSelector);
				this.transfer = 27;
				this.changeToUAH();
			}

			changeToUAH() {
				this.price = this.price * this.transfer;
			}

			render() {
				const element = document.createElement('div');

				if (this.classes.length === 0) { //дефолтный класс
					this.element = 'menu__item';
					element.classList.add(this.element);
				} else {
					this.classes.forEach(className => element.classList.add(className));
				}

				element.innerHTML = `
					<img src=${this.src} alt=${this.alt}>
					<h3 class="menu__item-subtitle">${this.title}"</h3>
					<div class="menu__item-descr">${this.descr}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
					</div>
				`;
				this.parent.append(element);
			}
		}
		new MenuCard(
			"img/tabs/vegy.jpg",
			"vegy",
			'Меню "Фитнес"',
			'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
			9,
			'.menu .container'
			// 'menu__item',
			// 'big'

		).render(); // можно не присваивать объеект переменой, а сделать просто объект на месте.

		new MenuCard(
			"img/tabs/elite.jpg",
			"elite",
			'Меню "“Премиум”"',
			'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
			19,
			'.menu .container',
			'menu__item',
			'big'
		).render(); // можно не присваивать объеект переменой, а сделать просто объект на месте.
		new MenuCard(
			"img/tabs/post.jpg",
			"post",
			'Меню "Постное"',
			'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
			22,
			'.menu .container',
			'menu__item',
			'big'
		).render(); // можно не присваивать объеект переменой, а сделать просто объект на месте.




//=========================================================================================================//
		//ОТПРАВКА ФОРМЫ (будем использовать XML http request, не современный вариант)

		//список фраз для разных ситуаций при отправке формы
		const message = {
			loading: 'загрузка',
			success: 'спасибо, скоро мы с вами свяжемся',
			failure: 'что-то пошло не так...'
		};


		//получаем все формы со страницы
		const forms = document.querySelectorAll('form');


		//берем все наши формы и под каждую подвязываем функцию postData
		forms.forEach(item => {
			postData(item);
		});


//функция, которая отвечает за постинг данных
function postData(form) {
	form.addEventListener('submit', (e) => {
		//submith - событие, срабатывающее каждый раз при отправке формы
		e.preventDefault();

		const statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
		statusMessage.textContent = message.loading;// (добавляем в div текст) пользователь увидит 'загрузка' сразу после нажатия кнопки
		//отправляем message на страницу
		form.append(statusMessage);//добавляем к форме сообщение(см. выше)



		//создаём объект РЕКВЕСТ
		const request = new XMLHttpRequest();
		//настраиваем запрос
		request.open('POST', 'server.php');//POST -метод, server.php - путь куда мы ссылаемся
		//подготовка данных для отправки из формы
		//Возможно отправка двумя способами -  FORMDATA и JSON; Ориентируемся на сервер или на бэкэндера...

		//вариант2 

		//настраиваем заголовки, которые будут говорить серверу, а что именно приходит..:
		request.setRequestHeader('Content-type', 'application/json');// !!!если мы используем связку http request + FormData(НЕ JSON) заголовок устанавливается автоматически и его устанавливать не нужно! иначе мы не получим данные на сервере!!! суперважнАА!
		//Content-type - тип контентаб 'multipart/form-data' - пишется согласно документации FormData

		
		const formData = new FormData(form); //создаём конструктор, form - та форма, откуда собираем данные
		//!!!ВАЖНО!!!У ИНПУТОВ , ОПШЕНОВ, ТЕКСТЭРИЕВ И Т.Д. ОБЯЗАН БЫТЬ АТРИБУТ name!! иначе FormData не найдёт инпут(и т.д.) и не возьмёт из него value

		//теперь FormData нужно превратить в JSON
		const object = {};//создадим пустой объект
		formData.forEach(function(value, key) {//перебераем formData и поместим всё в object
			object[key] = value;
		});

		const json = JSON.stringify(object);
		/* php нативно не умеет работать с форматом json. Чаще всего такие данные мы будем отправлять на сервера с помощю node.js */



		request.send(json);//formData - есть body так как мы что-то отправляем
		request.addEventListener('load', () => { //load -отслеживаем загрузку нашего запроса
			if (request.status === 200) { //статус 200 - запрос успешно прошел
				console.log(request.response);// увидеть, что запрос прошел

				/*array(2) {  - массив
					["name"]=>
					string(7) "Стас"
					["phone"]=>
					string(16) "+7 952 200 07 11"
					}*/
					form.reset();//очистка формы
					setTimeout(() => {//удаляем блок со страницы через 2 секунды
							statusMessage.remove();
						}, 2000);
				statusMessage.textContent = message.success;//выведем пользователю сообщение'спасибо, скоро мы с вами свяжемся'
			} else {
				statusMessage.textContent = message.failure;// выведем сообщение 'что-то пошло не так...'
			}
		});
	});
} 

		

});
