

const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length);// 2 - узнаём количество классов у элемента
console.log(btns[0].classList.item(0));//blue получаем класс под определённым индексом(перым у тега button идёт класс blue)
console.log(btns[0].classList.add('red'));     // у первой кнопки добавился класс .red
console.log(btns[0].classList.remove('blue')); // у первой кнопки удалён класс blue
console.log(btns[0].classList.toggle('blue'));  // переключает класс(если не было - включит, если был - выключит)


///ВАЖНО - можно передавать сразу несколько значений
console.log(btns[0].classList.add('red', 'hot', 'cheely', 'paper'));//добавить все классы


//проверить наличие класса на определённом элементе и вернуть булиновое значение
if (btns[0].classList.contains('red')) {
	console.log('класс есть!'); //класс есть!
}

//метод смены класса при клике со сложной проверкой
btns[0].addEventListener('click',() => {     //слушаем первую кнопку
	if(!btns[1].classList.contains('red')) {  //проверяем вторую кнопку на отсутствие класса red
		btns[1].classList.add('red');          //если класса нет - добавляем
	} else {
		btns[1].classList.remove('red');       //если класс есть - удаляем
	}
}); 

//альтернативный, короткий метод смены класса toggle без проверки
btns[2].addEventListener('click', () => {
	btns[2].classList.toggle('red');
});


//Устаревшее свойство для провекри наличия классов
console.log(btns[0].className);// выводит список классов ввиде одной строки


//====ДЕЛЕГИРОВАНИЕ СОБЫТИЙ====
//кликаем на один элемент, а класс меняется у другого

const wrapper = document.querySelector('.btn-block'); //получаем родителя всех кнопок

wrapper.addEventListener('click', (event) => { //e - то куда мы кликаем, хоть пустое место
	console.log(event.target);//   button - при клике на любую вложенность вернёт нам тег, на который попали
	console.dir(event.target);// - открыв элемент в консоле - ищем tagName, капсом написан сам тэг
	if (event.target && event.target.tagName == "BUTTON") {//выбрав button - мы отсеяли всё, что попадает в окружение прпи клике, все другие теги, которые не являются BUTTON
		console.log('HELLO');
	}
});

//ВАЖНО! В HTML НЕ ВСЕ ТЕГИ ПОДДЕРЖИАЮТ СОБЫТИЯ КЛИКА!, В ЭТОМ СЛУЧАЕ У НИХ НЕ БУДЕТ event.target

//добавляем элемент динамически и на нём тоже работает события из кода выше, даже не смотря на то, что элемент создался позже
const btn = document.createElement('button');
		btn.classList.add('red');
		wrapper.append(btn);


		
// Если бы мы добавили событие клик через forEach - то кнопка добавленная после этого события не стала бы работать:
btns.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log('Hello');
	});
});

//bonus!
wrapper.addEventListener('click', (event) => { //e - то куда мы кликаем, хоть пустое место
	console.log(event.target);//   button - при клике на любую вложенность вернёт нам тег, на который попали
	console.dir(event.target);// - открыв элемент в консоле - ищем tagName, капсом написан сам тэг
	if (event.target && event.target.matches('button.red')) {//РАБОТАЕТ ТОЛЬКО КНОПКА С КЛАССОМ .red, остальные не откликаются. Если у кнопки появился класс .red динамически - то он тоже будет работать!!!
		console.log('HELLO');
	}
});