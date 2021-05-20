
window.addEventListener('DOMContentLoaded', () =>{
	const parentTabs = document.querySelector('.tabheader__items'),
			tabContent = document.querySelectorAll('.tabcontent'),
			tabs = document.querySelectorAll('.tabheader__item');

			hideContent();
			showContent(0);

			parentTabs.addEventListener('click', e => {
				const target = e.target;
				if (target.className == 'tabheader__item'){
					tabs.forEach((e, i) => {
						if (target == e) {
							console.log(i);
							hideContent();
							removeActiveClass();
							addActiveClass(i);
							showContent(i);
						}
					});
				}
			});

			function hideContent() {
				tabContent.forEach(e => {
					e.style.display='none';
				});
			}

			function showContent(num) {
				tabContent.forEach((e, i) => {
					if (i == num) {
						e.style.display='block';
					}
				});
			}

			function removeActiveClass() {
				tabs.forEach(e => {
					e.classList.remove('tabheader__item_active');
				});
			}

			function addActiveClass(num) {
				tabs.forEach((e, i)=> {
					if (i == num) {
					e.classList.add('tabheader__item_active');
				}});
			}

			
	////////////timer////////////




	saleTimer ();

	function saleTimer () {
		const days = document.querySelector('#days'),
		hours = document.querySelector('#hours'),
		minutes = document.querySelector('#minutes'),
		seconds = document.querySelector('#seconds');
			timeObj = {
				day: 0,
				hour: 0,
				minut: 0,
				second: 0,
			};


			//normalize date===
			let finishDate = new Date('2021-06-05'),
				 timeZone = finishDate.getTimezoneOffset();
			finishDate = +finishDate + (timeZone * 60 * 1000);
			//=================
				
			setInterval(timeLeft, 1000);

		function timeLeft () {
			let now = new Date(),
				 differenceTime = finishDate - now;

			timeObj.day = Math.trunc((differenceTime / 1000 / 60 / 60 / 24) % 31);
			timeObj.hour = Math.trunc((differenceTime / 1000 / 60 / 60) % 24);
			timeObj.minut = Math.trunc((differenceTime / 1000 / 60) % 60);
			timeObj.second = Math.trunc((differenceTime / 1000) % 60);

			days.innerHTML = timeObj.day;
			hours.innerHTML = timeObj.hour;
			minutes.innerHTML = timeObj.minut;
			seconds.innerHTML = timeObj.second;
		}
	}
});
