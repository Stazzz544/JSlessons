
//динамическая типизация


//TO STRING
//1)
console.log(typeof(String(null))); //string
console.log(typeof(String(4)));    //string
console.log(String(null));         //null - только теперь это слово null
console.log(String(4));            //4 ввиде строки


//2) конкотенация (сложение строки с чем-то)
console.log(typeof(5 + '')); //string
console.log(typeof(null + ''));//string
//console.log(typeof(любое значение + '')); - при сложении со сторокой получится строка

//реальный пример(старый способ, так как сейчас используют интерполяцию)
//путь формируется динамически, число 5 сразу становится строкой(5-я секция каталога)
//**интерполяция это бэктики
const num = 5;
console.log("https://vk.com/catalog/" + num);//https://vk.com/catalog/5

const fontSize = 26 + 'px';
console.log(fontSize); // 26px


//TO NUMBER
//1
console.log(typeof(Number('4'))); //number (используют очень редко)
//2
//обычно используют унарный плюс
console.log(typeof(+'4'));        //number

let answ = +prompt("Hello", "");//ВСЁ ЧТО ПОЛУЧАЕМ ОТ ПОЛЬЗОВАТЕЛЯ - СТРОКИ!!!(input-ы, prompt-ы...)

//3 метод parseInt
console.log(typeof(parseInt('15px', 10))); //number        10 - это десятичная система


//TO BULIAN
//fals-ы:
// 0, "", null, undefined, NaN
//true:
//всё остальное: строки, объекты, числа ...

//1)
let swither = null;
if (swither) {
	console.log('Working...');
}//условия выполнятся не будут потому что swither = null, а null это false

let swither = 1;
if (swither) {
	console.log('Working...');
}//Working... , так как 1 это true

//2) почти не используется
console.log(typeof(Boolean('4'))); //boolean
console.log(typeof(Boolean(0)));   //boolean

//3) редкий приём, два знака отрицания
console.log(typeof(!!'4444')); //boolean



let x = [] + 1 + 2
console.log(x);
