// Scroll
let lastScrollTop = 0;
let navbar = document.getElementById("navbar");
let navbarShareSingle = document.getElementById("navbar-share-single");
window.addEventListener("scroll", function() {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(scrollTop > lastScrollTop) {
		navbar.style.display = "flex";
		navbarShareSingle.style.display = "none";
	} else {
		navbar.style.display = "none";
		navbarShareSingle.style.display = "flex";
	}

	lastScrollTop = scrollTop;
});

// Social Media Share
function whatsappShare() {
	document.location.href = "https://wa.me/62895391089934";
}

function linkedinShare() {
	document.location.href = "https://www.linkedin.com/in/sopyan-tirto-laksono/";
}

function facebookShare() {
	document.location.href = "https://www.facebook.com/sofyan.t.laksono";
}

function instagramShare() {
	document.location.href = "https://www.instagram.com/tirto_laksono/";
}

function githubShare() {
	document.location.href = "https://github.com/sopyantirtolaksono";
}

function linktreeShare() {
	document.location.href = "https://linktr.ee";
}