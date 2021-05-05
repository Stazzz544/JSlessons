'use strict';

const box = document.getElementById('box'),
		btns = document.getElementsByTagName('button'),
		circles = document.getElementsByClassName('circle'),
		wrapper = document.querySelector('.wrapper'), // родитель wrapper
		hearts = wrapper.querySelectorAll('.heart'),  // можно использовать обращение не к document, а к родителю wrapper
		oneHeart = wrapper.querySelector('heart');    // можно использовать обращение не к document, а к родителю wrapper

console.dir(box);// узнать все свойства у объекта

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.margin = '0px auto';
btns[1].style.borderRadius = '50%';
// circles.style.backgroundColor = 'red'; - конструкция не работает, так как мы обращаемся не к какому-то элементу, а к псевломассиву
circles[0].style.backgroundColor = 'red'; // конструкция работает

let num = 600;
box.style.cssText = `background-color: green; width: ${num}px`; // альтернативный вариант записи

//==========================================
//Работа со всеми элементами псевдомассива(Коллекции)

//цикл для переборки
for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.backgroundColor = 'blue';
}

//специальный перебирающий метод forEach
// во внутрь передаём callback. Каждый элемент - это item, 
// второй аргумент - это номер по порядку, а третий аргумент - это ссылка на массив
hearts.forEach(item => {
	item.style.backgroundColor = 'yellow'
});

//==========================================
//Создание элементов на лету - createElement();
const div = document.createElement('div'); //элемент создан и сохранён внутри js файла, на странице его нет
//Создание текстового узЛа
const text = document.createTextNode('Тут был я');

//==========================================

//Добавление класса к элементу
div.classList.add('black');


//==========================================
//ДОБАВЛЕНИЯ ЭЛЕМЕНТОВ В РАЗНЫЕ ЧАСТИ КОДА

//добвляем div в конец body(современный метод)
document.body.append(div);

//вставляем этот же элемент в другого родителя - wrapper
document.querySelector('.wrapper').append(div);

//поместить элемент в переменную и так же добавить тег div в конец wrapper
wrapper.append(div)

//добавить div в начало wrapper
wrapper.prepend(div)

//метод before и after
hearts[1].before(div);
hearts[2].after(div);

//удаление элементов со страницы
circles[2].remove();

//==========================================
//ЗАМЕНА ОДНОГО ЭЛЕМЕНТА ДРУГИМ
//hearts[0]- какой элемент хотим заменить
//(circles[0] - каким элементом мы хотим заменить
hearts[0].replaceWith(circles[0]);


///==========================================
//устаревшие конструкции:
//*всё делается через родителя в отличии от современного кода

//добвляем div в конец wrapper
wrapper.appendChild(div);//такой же метод как append

//добвляем div перед конкретным элементом
wrapper.insertBefore(div, hearts[2]);//первый аргумент - то что вставляем, второй - перед чем вставляем

//Удаление элемента
wrapper.removeChild(hearts[1]);
//circles[2].remove(); для сравнения в remove не нужно получать родителя у удаляемого элемента

//замена элементов.
wrapper.replaceChild(circles[0], hearts[2]); //(circles[0] - какой элемент меняем, hearts[0] - на какой элемент меняем

///==========================================
//ВСТАВКА ТЕКСТА В ЭЛЕМЕНТ
// I вариант
div.innerHTML = 'Hello world';//используется когда подразумевается работа с како-то html структурой
div.innerHTML = '<h1>Hello world</h1>';//вставка с тегом

//II вариант - работает ТОЛЬКО с текстом, в целях безопасности
//Эти данные получаются от пользователя
//использовать когда хотим получить именно текст!
div.textContent = "hello";
//div.textContent = "<h1>hello/h1>" такой вариант работать не будет, теги будут ввиде текста

///==========================================
//Комбинация всех знаний
//вставляем кусочек html кода перед или после определённых тегов
//1)указываем элемент над которым будем производить действия - div
//2)метод insertAdjacentHTML принимает 2 аргумента 
// варианты первого аргумента:
//afterbegin  - вставить html код в начало элемента, т.е. в теге внутри появится элемент если его не было, а если был - то он будет первым
//afterend    - вставляет тег после элемента
//beforebegin - вставить html код перед элементом
//beforeend   - как afterbegin только в конец
//              и
// - от html код, который хотим вставить
div.insertAdjacentHTML('beforebegin', '<h2>Helloooooo</h2>'); 