import Image from 'next/image';
import { useState, useContext } from 'react';
import DispatchContext from '@/context/DispatchContext';
import AppContext from '@/context/AppContext';

interface Props {
	prod: [ProductType];
}

export default function Products({ prod }: Props) {
	const { cart } = useContext(AppContext);
	const dispatch = useContext<DispatchContextType>(DispatchContext);

	const handleAddToCart = (product: ProductType) => {
		dispatch({ type: 'ADD_TO_CART', payload: product });
	};

	const [categories, setCategories] = useState([
		'Bakery',
		'Baking',
		'Beverages',
		'Canned and Packaged Foods',
		'Dairy',
		'Deli',
		'Frozen Foods',
		'Health and beauty',
		'Household Supplies',
		'Personal Care',
		'Snacks and Sweets',
		'Veggies and Fruits',
	]);

	const products = [
		{
			id: 1,
			name: 'Sabji',
			href: '#',
			price: '$48',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
		{
			id: 2,
			name: 'Sabji',
			href: '#',
			price: '$35',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
		{
			id: 3,
			name: 'Sabji',
			href: '#',
			price: '$89',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
		{
			id: 4,
			name: 'Machined Mechanical Pencil',
			href: '#',
			price: '$35',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
		{
			id: 5,
			name: 'Machined Mechanical Pencil',
			href: '#',
			price: '$35',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
		{
			id: 6,
			name: 'Machined Mechanical Pencil',
			href: '#',
			price: '$35',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
		{
			id: 7,
			name: 'Machined Mechanical Pencil',
			href: '#',
			price: '$35',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
		{
			id: 8,
			name: 'Machined Mechanical Pencil',
			href: '#',
			price: '$35',
			imageSrc:
				'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
			imageAlt: 'Veggies',
		},
	];

	return (
		<div className='mt-[10%] items-center justify-center'>
			<div className='xl:px-22 container mx-auto px-2 md:px-12'>
				<div className='text-center text-primaryText'>
					<div className='bg-sec block rounded-lg bg-secondaryBg px-2 py-12 shadow-lg md:py-16 md:px-12'>
						<h1 className='mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
							Our Products <br />
							<span className='text-xl font-normal tracking-normal'>
								Select from a Wide range of products
								available in out store.
							</span>
						</h1>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<span className='ml-10 font-secondaryFont text-primaryText'>
					Shop by category:
				</span>
				<div className='z-20 p-10'>
					<div className='dropdown relative inline-block'>
						<button className='inline-flex items-center rounded bg-secondaryBg px-4 py-2 font-semibold text-gray-700'>
							<span className='mr-1'>Choose Categories</span>
							<svg
								className='h-4 w-4 fill-current'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
							>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
							</svg>
						</button>
						<ul className='dropdown-menu absolute hidden pt-1 text-primaryText'>
							{categories.map((word, index) => (
								<li className='' key={index}>
									<a
										className='whitespace-no-wrap block rounded-t bg-secondaryBg px-4 py-2 hover:bg-green-200'
										href='#'
									>
										{word}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
					<h2 className='sr-only'>Products</h2>
						<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
							{products.map((product) => (
								<div
									key={product.id}
									// href={product.href}
									className=''
								>
									<div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
										<Image
											width={100}
											height={100}
											src={product.imageSrc}
											alt={product.imageAlt}
											className='h-full w-full transform object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-75'
										/>
									</div>
									<div className=''>
										<h3 className='mt-4 text-xl text-gray-700'>
											{product.name}
										</h3>
										<p className='mt-1 text-lg font-medium text-gray-900'>
											{product.price}
										</p>
									</div>
									<div>
										<div
											className='group relative inline-block pt-1 text-lg'
											onClick={() =>
												handleAddToCart(product)
											}
										>
											<span className='relative z-10 block cursor-pointer overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-primaryText'>
												<button className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></button>
												<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondaryBg transition-all duration-300 group-hover:-rotate-180'></span>
												<span className='relative'>
													Add to Cart
												</span>
											</span>
										</span>
										<span
											className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
											data-rounded='rounded-lg'
										></span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
