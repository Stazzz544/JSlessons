//самые клавные элементы DOM дерева
// body и head можно получить просто по команде document.*

console.log(document.body);//получим все вложеные теги
console.log(document.head);// head на страничке не увидеть, в нём метатеги и тайтл


//постучатся к html можно через document.documentElement

console.log(document.documentElement);


//Узлы, которые являются детьми у body
console.log(document.body.childNodes);//получаем NodeList из 8 элементов (нодов)


//получение первого или последнего ребенка внутри родителя
console.log(document.body.firstChild); // получили текстовую ноду
console.log(document.body.lastChild); // получили тег script
console.log(document.body.firstElementChild); // получили div с классом wrapper
console.log(document.body.lastElementChild); // получили тег script


//Получение родителей, соседей и деней

//получение родителя при клике на ребёнка #current
console.log(document.querySelector('#current').parentNode); // получили родителя div с классом first
//если хотим получить более старшего родителя - просто дублируем команду
console.log(document.querySelector('#current').parentNode.parentNode);// получили div с классом wrapper
//Если вдруг выкатилась нода TEXT - можно использовать более явную команду
console.log(document.querySelector('#current').parentElement);// получили родителя div с классом first
console.log(document.querySelector('#current').parentElement.parentElement);// получили div с классом wrapper



//получение по дата атрибуту
console.log(document.querySelector('[data-current="3"]'));// получили тег li, где прописан этот дата атрибут



//получаем следующий тег после тега с дата атрибутом
console.log(document.querySelector('[data-current="3"]').nextSibling); // тут мы получаем текстовую ноду
console.log(document.querySelector('[data-current="3"]').previousSibling); // тут мы получаем текстовую ноду

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // тут мы получаем ТЕГ li
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // тут мы получаем ТЕГ li


for (let node of document.body.childNodes){
	if (node.nodeName == '#text') { // если название ноды #text - то её пропускаем
		continue;
	}
	console.log(node);

}