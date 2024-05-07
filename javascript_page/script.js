const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

menuToggle.addEventListener('click', () =>{
	navMenu.classList.toggle('display-menu')
});

darkModeToggle.addEventListener('click', () =>{
	document.body.classList.toggle('dark-mode')
});

var typed = new Typed(".text",{
	strings:["Frontend developer", "Web developer", "Graphic designer"],
	typeSpeed:100,
	backSpeed:100,
	backDelay:1000,
	loop:true

});
window.onscroll = () =>{

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

};
function send() {
	// body...
	consol.log("function call");

			Email.send({
		    Host : "smtp.elasticemail.com",
		    Username : "mlamboaaron0@gmail.com",
		    Password : "DFB9786B3F970EF8C5E3A87874ADE676290C",
		    To : 'mlamboaaron0@outlook.com',
		    From : "mlamboaaron0@gmail.com",
		    Subject : "This is the subject",
		    Body : "And this is the body"
		}).then(
		  message => alert(message)
		);

}
    // Swiper on the page
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1, // Corrected spelling
		spaceBetween: 50,
		loop: true,
		grabCursor: true, // Corrected spelling
		pagination: { // Corrected spelling
			el: ".swiper-pagination", // Changed "paginatio" to "pagination" and added missing 'el'
			clickable: true // Added this option to enable clickable pagination bullets
		},
		navigation: { // Corrected spelling
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev" // Removed the extra comma after ".swiper-button-prev"
		}
	});