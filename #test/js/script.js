"use strick";

const car = {
	type: 'jeep',
	color: 'red',
	wheel: 4,
	seat: 5,
	engin: 2.8,
	start: function() {
		console.log('врум-врум-врум');
	},
	changeColor: function() {
		car.color = 'green';
		
		console.log(car);
	},
	deleteEngin: function() {
		console.log(`из машины извлечён двигатель мощностью: ${car.engin}`);
		delete car.engin;
		delete car.deleteEngin;
		car.installEngin = function() {
			car.engin = 3.0;
			console.log(`в машину установлен новый двигатель мощностью: ${car.engin}`);
			console.log(car);
		};
			console.log(car);
	}
};