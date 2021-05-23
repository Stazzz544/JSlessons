//КЛАССЫ (ES-6, 2015г)

//классы - это красивая обёртка функций конструкторов(синтаксический сахар)
//классы - это всё те же функции
//Имя класса всегда с большой буквы
class Rectangle {
	constructor(height, weight)/*аргументы из вне*/ {
		this.height = height;// обращение к экз. нового созданного объекта - height - свойство
		this.weight = weight;// обращение к экз. нового созданного объекта
	}
	//метод
	calcArea() {
		return this.height * this.weight;
	}

}

const square = new Rectangle(10, 10);
const long = new Rectangle(15, 177);

console.log(square.calcArea());//  100
console.log(long.calcArea());  //  2655

/*
принципы ООП
1.Абстракция - отделяем концепцию от её экземпляра
-это когда мы отделяем концепцию от её экземпляра
class Rectangle {       <--- концепция
	constructor(h.....  
const square = new Rectangle(10, 10);  <---экземпляры, созданные на основе концепции
const long = new Rectangle(15, 177);   <---экземпляры, созданные на основе концепции

2.Наследование - способность нашего объекта или класса базироваться на другом объекте или классе
Это главный механизм для повторного использования кода.

*/

class ColoredRectangleWithText extends Rectangle {//extends - наследуется от 
	constructor(height, weight, text, bgColor){
		super(height, weight); //super - вызывает super конструктор родителя: this.height... и this.weight...
		//super - ВСЕГДА  НА ПЕРВОМ МЕСТЕ В КОНСТРУКТОРЕ
		this.text = text;
		this.bgColor = bgColor;
	}
	//calcArea тоже наследуется
	showMyProps() {
		console.log(`text: ${this.text}, color: ${this.bgColor} `);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();//            text: Hello World, color: red 
console.log(div.calcArea());//  250