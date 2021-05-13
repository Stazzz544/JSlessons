window.addEventListener('DOMContentLoaded', () => {

	const btnPlus = document.querySelector('#buttonPlus'),
			btnMinus = document.querySelector('#buttonMinus'),
			btnMultiply = document.querySelector('#buttonMultiply'),
			btnDivide = document.querySelector('#buttonDivide'),
			resultation = document.querySelector('.result'),
			input1 = document.querySelector('#inp1'),
			input2 = document.querySelector('#inp2');

	

	function calculator (mathSingh) {
		const numOne = input1.value,
				numTwo = input2.value;
		if (mathSingh === '+') {
			const result = +numOne + +numTwo;
			resultation.innerHTML = result;
		} else if(mathSingh === '-') {
			const result = numOne - numTwo;
			resultation.innerHTML = result;
		} else if(mathSingh === '*') {
			const result = numOne * numTwo;
			resultation.innerHTML = result;
		} else if(mathSingh === '/') {
			const result = numOne / numTwo;
			resultation.innerHTML = result;
		}
	}

	function calcPlus () {
		calculator('+');
	}
	function calcMinus () {
		calculator('-');
	}
	function calcMultiply () {
		calculator('*');
	}
	function calcDivide () {
		calculator('/');
	}


	function calcSigh (event) {
		console.log(event)
	}


	btnPlus.addEventListener('click', calcSigh);
	btnMinus.addEventListener('click', calcMinus);
	btnMultiply.addEventListener('click', calcMultiply);
	btnDivide.addEventListener('click', calcDivide);




	function hello() {
		console.log('hello')
	}

});