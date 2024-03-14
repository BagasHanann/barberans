// Toggle Navbar
const navMenu = document.querySelector('.navbar-nav');
document.querySelector('#hamburger').onclick = (e) => {
	navMenu.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
	e.preventDefault();
	!hamburger.contains(e.target) && navMenu.classList.remove('active');
});
