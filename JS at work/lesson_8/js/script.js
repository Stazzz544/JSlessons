//Функции - конструкторы
//Функция - объект, в неё можно записать какие-то методы и свойства
//длинный синтаксис для создания типов данных начинается со слова new

const num = new Number(3);//УСТАРЕЛО
console.log(num);// в браузере Number {3}, есть возможность открыть и увидеть __proto__: Number


const func = new Function();//УСТАРЕЛО
console.log(func);// в браузере ƒ anonymous() {}
//если такая функция будет содержать методы и свойства - то она в итоге создаст нам новый объект



//реальный пример с нормальным синтаксисом
//функция конструктор для создания новых пользователей
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	//можно в функцию положить метод
	this.hello = function() {
		console.log(`Hello ${name}`);
	};
}

const ivan = new User('ivan', 44); //Теперь в этой переменной у нас объект!
console.log(ivan);// User {name: "ivan", id: 44, human: true}
const alex = new User('alex', 72);
console.log(alex);//User {name: "alex", id: 72, human: true}
ivan.hello();//Hello ivan
alex.hello();//Hello alex


//Prototype
//При помощи него мы можем добавлять новые свойства или методы в наш конструктор
//и они будут прототипно наследоваться у потомков

User.prototype.exit = function() {
	console.log(`Пользователь ${this.name} вышел`)
};
//теперь метод exit появится у объектов созданных при помощи function User(name, id)...
//метод будет лежать в User -> __proto__ -> exit

ivan.exit();//Пользователь ivan вышел
alex.exit();//Пользователь alex вышел

