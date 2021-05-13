function sum (a, b ) {
	console.log(a + b);
}

sum(44, 232);



const summ = function (a, b) {
	console.log(a + b)
};

summ(12, 55);

const arrowSumm = (a, b) => {
	console.log(a + b);
};

arrowSumm(334, 669);


function helloWorld (hello, world) {
	hello(); world();
}

function hello () {
	console.log('hello')
}

function world () {
	console.log('world')
}

helloWorld(hello, world);