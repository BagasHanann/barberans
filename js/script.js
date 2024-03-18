// Toggle Navbar
const navMenu = document.querySelector('.navbar-nav');
document.querySelector('#hamburger').onclick = () => {
	navMenu.classList.toggle('active');
};

const cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-button').onclick = (e) => {
	cart.classList.toggle('active');
	e.preventDefault();
};

const hamburger = document.querySelector('#hamburger');
const searchButton = document.querySelector('#search-button');
const sc = document.querySelector('#cart-button');

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
		navMenu.classList.remove('active');
	}
	if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove('active');
	}
	if (!sc.contains(e.target) && !cart.contains(e.target)) {
		cart.classList.remove('active');
	}
});

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
	e.preventDefault();
	searchForm.classList.toggle('active');
	searchBox.focus();
};

// modal
const itemDetailModal = document.querySelector('#modal-items');

const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) => {
	btn.onclick = (e) => {
		itemDetailModal.style.display = 'flex';
		e.preventDefault();
	};
});

document.querySelector('.modal .close-icon').onclick = (e) => {
	itemDetailModal.style.display = 'none';
	e.preventDefault();
};

window.onclick = (e) => {
	if (e.target == itemDetailModal) {
		itemDetailModal.style.display = 'none';
	}
};
