// Toggle Navbar
const navMenu = document.querySelector('.navbar-nav');
document.querySelector('#hamburger').onclick = () => {
	navMenu.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
	e.preventDefault();
	if (!hamburger.contains(e.target) && navMenu.contains('active')) {
		navMenu.classList.remove('active');
	}
});
