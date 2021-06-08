"use strick"
let b = 1;
let fer = (function (){
	
	let a = 1;

	return {
		say: function() {
			console.log(a);
			a++;
			if (a > 15) {
				clearInterval(id);
				console.log('finish')
			}
		}
	};
}());

let id = setInterval(() => {
	fer.say();
	
}, 300);

