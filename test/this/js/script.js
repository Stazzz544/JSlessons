'use strict';

class Car {
	constructor (color, engin){
		this.color = color;
		this.engin = engin;
	}
	start (){
		console.log(`${this.engin}: rrRRRrrrRR`);
	}
}

const div = document.createElement('div'),
		body = document.querySelector('body');
		body.append(div);


		div.style.cssText =`
		width: 100%;
		height: 300px;
		background-color: pink;
		display: flex;
		justify-content: space-around;
		align-items: center;
		`;

		div.innerHTML = `
		<input type="text">
		<input type="text">
		<input type="text">
		`;

const inputs = document.querySelectorAll('input');
inputs.forEach((e) => {
	e.style.cssText = `
		display: block;
		height: 40px
		`;
})
		
