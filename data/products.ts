/**
 * Products Data
 */

// Products
const PRODUCTS = {
	Dairy: [
		{
			id: '002',
			name: 'Milk',
			price: 52,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '003',
			name: 'Butter',
			price: 78,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '004',
			name: 'Cheese',
			price: 92,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '005',
			name: 'Yogurt',
			price: 68,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '006',
			name: 'Cottage Cheese',
			price: 85,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '007',
			name: 'Sour Cream',
			price: 58,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '008',
			name: 'Heavy Cream',
			price: 72,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '009',
			name: 'Whipped Cream',
			price: 62,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '010',
			name: 'Condensed Milk',
			price: 96,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
		{
			id: '011',
			name: 'Evaporated Milk',
			price: 82,
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
		},
	],
	Bakery: [
		{
			id: 1,
			name: 'Sabji',
			href: '#',
			price: '$48',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
	],
	Beverages: [
		{
			id: 1,
			name: 'Sabji',
			href: '#',
			price: '$48',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
	],
	'Household Supplies': [
		{
			id: 1,
			name: 'Sabji',
			href: '#',
			price: '$48',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
	],
	'Health & Beauty': [
		{
			id: 1,
			name: 'Sabji',
			href: '#',
			price: '$48',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
	],
	'Snacks & Sweets': [
		{
			id: 1,
			name: 'Sabji',
			href: '#',
			price: '$48',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
	],
	'Veggies & Fruits': [
		{
			id: 1,
			name: 'Sabji',
			href: '#',
			price: '$48',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
	],
};

const allProducts: ProductType[] = [];

for (const category in PRODUCTS) {
	// @ts-ignore
	allProducts.push(...PRODUCTS[category]);
}

export { allProducts };

export default PRODUCTS;
