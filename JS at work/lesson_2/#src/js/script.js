//сначала задаём глобальный обработчик событий
window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),     //меню из 4-х заглавий
			tabsContent = document.querySelectorAll('.tabcontent'),   //элементы табов(картинки, которые будут меняться)
			tabsParent = document.querySelector('.tabheader__items'); //родитель менюхи из 4-х путнктов


	hideTabContant();  //прячем все табы и снимаем акивность со всех кнопок
	showTabContent(); // под каким номером элементы получат классы активности

	tabsParent.addEventListener('click', (event) => {
		const target = event.target; //создаём переменную, чтобы каждый раз не писать event.target

		if (target && target.classList.contains('tabheader__item')) {
			 
				if (target == item) {

					console.log(item);
					console.log(i);

					hideTabContant();
					showTabContent(i);
				}
			});
		}
	});
	
	function hideTabContant() {//скрываем все табы картинки
		tabsContent.forEach(item => {
			item.style.display ='none';
		});

		tabs.forEach(tab => {//убераем жирность у активной менюшки
			tab.classList.remove('tabheader__item_active');
		});
	}
	
	function showTabContent(i = 0) {
		tabsContent[i].style = 'block';                  //показываем таб картинку
		tabs[i].classList.add('tabheader__item_active'); //показываем таб менюшку
	}
});