document.addEventListener('alpine:init', () => {
	Alpine.data('products', () => {
		items = [
			{
				id: 1,
				name: 'Pomade',
				img: 'product.jpg',
				price: 50000,
			},
			{
				id: 2,
				name: 'Hair Powder',
				img: 'product.jpg',
				price: 60000,
			},
			{
				id: 3,
				name: 'Hair Spray',
				img: 'product.jpg',
				price: 70000,
			},
		];
	});

	Alpine.store('cart', {
		items: [],
		total: 0,
		qty: 0,
		add(newItem) {
			const itemCart = this.items.find((item) => item.id === newItem.id);

			if (!itemCart) {
				this.items.push({ ...newItem, qty: 1, total: newItem.price });
				this.qty++;
				this.total += newItem.price;
			} else {
				this.items = this.items.map((item) => {
					if (item.id !== newItem.id) {
						return item;
					} else {
						item.qty++;
						item.total = item.price * item.qty;
						this.qty++;
						this.total += item.price;
						return item;
					}
				});
			}
		},
		remove(id) {
			const itemCart = this.items.find((item) => item.id === id);

			if (itemCart.qty > 1) {
				this.items.map((item) => {
					if (item.id !== id) {
						return item;
					} else {
						item.qty--;
						item.total = item.price * item.qty;
						this.qty--;
						this.total -= item.price;
						return item;
					}
				});
			} else if (itemCart.qty === 1) {
				this.items = this.items.filter((item) => item.id !== id);
				this.qty--;
				this.total -= itemCart.price;
			}
		},
	});
});
