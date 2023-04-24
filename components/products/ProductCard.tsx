import AppContext from '@/context/AppContext';
import DispatchContext from '@/context/DispatchContext';
import Image from 'next/image';
import React, { useContext } from 'react';

interface Props {
	product: ProductType;
}

const ProductCard: React.FC<Props> = ({ product }) => {
	const { cart } = useContext(AppContext);
	const dispatch = useContext<DispatchContextType>(DispatchContext);

	const handleAddToCart = (product: ProductType) => {
		dispatch({ type: 'ADD_TO_CART', payload: product });
	};

	return (
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
					alt={product.name}
					className='h-full w-full transform object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-75'
				/>
			</div>
			<div className=''>
				<h3 className='mt-4 text-xl text-gray-700'>{product.name}</h3>
				<p className='mt-1 text-lg font-medium text-gray-900'>
					{product.price}
				</p>
			</div>
			<div>
				<div
					className='group relative inline-block pt-1 text-lg'
					onClick={() => handleAddToCart(product)}
				>
					<span className='relative z-10 block cursor-pointer overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-primaryText'>
						<button className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></button>
						<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondaryBg transition-all duration-300 group-hover:-rotate-180'></span>
						<span className='relative'>Add to Cart</span>
					</span>
					<span
						className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
						data-rounded='rounded-lg'
					></span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
