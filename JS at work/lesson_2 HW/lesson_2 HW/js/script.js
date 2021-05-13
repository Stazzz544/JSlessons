
window.addEventListener('DOMContentLoaded', () =>{
	const parentTabs = document.querySelector('.tabheader__items'),
			tabContent = document.querySelectorAll('.tabcontent'),
			tabs = document.querySelectorAll('.tabheader__item');

	hide();
	deleteActive();


	parentTabs.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('tabheader__item') ){
			tabs.forEach((item, i) => {
				if (target == item) {
					hide();
					show(i);
				}
			})
			
			deleteActive();


		}
	});

	show(0)

	function hide() {
		tabContent.forEach(element => {
			element.style.display = 'none';
		});
	}
	function show(i=0) {
		tabContent[i].style.display = 'block';
	}

	function deleteActive() {
		tabs.forEach(element => {
			element.classList.remove('tabheader__item_active');
		});
	}


});
