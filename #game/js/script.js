"use strick";

const fearPoint = document.querySelector('.fear-point'),
		fearImg = document.querySelector('.fiar-img');

fearPoint.addEventListener('mouseenter', () => {
   fearImg.classList.add('active');
});