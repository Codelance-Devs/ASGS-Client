import { useState, useMemo } from 'react';
import PRODUCTS, { allProducts } from '@/data/products';
import Head from 'next/head';
import ProductCard from '@/components/products/ProductCard';

type Category = keyof typeof PRODUCTS;

export default function Products() {
	const categories = useMemo(() => {
		return Object.keys(PRODUCTS);
	}, []);

	const [selectedCategory, setSelectedCategory] = useState<
		keyof typeof PRODUCTS | null
	>(null);

	const [currentProducts, setCurrentProducts] = useState(allProducts);

	const handleUpdateCategory = (category: Category) => {
		setSelectedCategory(category);
		// @ts-ignore
		setCurrentProducts(PRODUCTS[category]);
	};

	const handleResetCategory = () => {
		setSelectedCategory(null);
		setCurrentProducts(allProducts);
	};

	return (
		<>
			<Head>
				<title>Products | ASGS</title>
			</Head>
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
						{selectedCategory && (
							<p
								className='text-red-500 text-sm hover:underline cursor-pointer transition-all duration-100'
								onClick={handleResetCategory}
							>
								Clear category
							</p>
						)}
					</span>
					<div className='z-20 p-10'>
						<div className='dropdown relative inline-block'>
							<button className='inline-flex items-center rounded bg-secondaryBg px-4 py-2 font-semibold text-gray-700'>
								<span className='mr-1'>
									{selectedCategory
										? selectedCategory
										: 'Choose Categories'}
								</span>
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
									<li
										className='cursor-pointer'
										key={index}
										onClick={() => {
											handleUpdateCategory(
												word as Category
											);
										}}
									>
										<span className='whitespace-no-wrap block rounded-t bg-secondaryBg px-4 py-2 hover:bg-green-200'>
											{word}
										</span>
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
							{currentProducts.map((product, index) => (
								<ProductCard product={product} key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
