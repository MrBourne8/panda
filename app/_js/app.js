document.addEventListener("DOMContentLoaded", function () {

	const swiper = new Swiper('.swiper', {
		speed: 400,
		spaceBetween: 40,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 3,
	});



	const swiper2 = new Swiper(".model__swiper-nav", {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	const modelSwiper = new Swiper('.model__swiper', {
		speed: 400,
		spaceBetween: 40,
		slidesPerView: 1,
		thumbs: {
			swiper: swiper2,
		}
	});

});