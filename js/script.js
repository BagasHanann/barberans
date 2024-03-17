// Toggle Navbar
const navMenu = document.querySelector('.navbar-nav');
document.querySelector('#hamburger').onclick = () => {
	navMenu.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger');
const searchButton = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
		navMenu.classList.remove('active');
	}
	if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove('active');
	}
});

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
	e.preventDefault();
	searchForm.classList.toggle('active');
	searchBox.focus();
};
