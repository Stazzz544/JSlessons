
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
							hideContent();
							showContent(i);
						}
					});
				}
			});

			function hideContent() {
				tabContent.forEach(e => {
					e.style.display='none';
				});
				tabs.forEach(e => {
					e.classList.remove('tabheader__item_active');
				});
			}

			function showContent(num) {
				tabContent[num].style.display='block';
				tabs[num].classList.add('tabheader__item_active');
			}
});
