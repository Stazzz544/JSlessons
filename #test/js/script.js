

function buyCar (car, callback) {
	console.log(`я купил ${car}`);
	callback();
}

function money(cash) {
	// console.log(`я потратил ${cash}`)
	console.log('я потратил' + cash());
}

function cash (){
	console.log('200$')
}

// buyCar('ferrari', money(cash));
buyCar ('Ferrari', ()=> money(cash));