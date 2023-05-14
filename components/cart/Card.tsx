import { useContext } from 'react';
import Image from 'next/image';
import DispatchContext from '@/context/DispatchContext';

interface Props {
	product: ProductType;
}

function Card({ product }: Props) {
	const dispatch = useContext(DispatchContext);

	const handleIncrementQuantity = () => {
		dispatch({ type: 'ADD_TO_CART', payload: product });
	};

	const handleDecrementQuantity = () => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: product });
	};

	return (
		<div className='my-5 mx-auto h-max w-[330px] rounded-lg border border-neutral-200 bg-primaryBg/60 px-5 shadow-md shadow-neutral-300'>
			<div className='py-5'>
				<Image
					className='drop-shadow-neutral-400 max-h-[200px] w-full rounded-lg object-cover drop-shadow-lg'
					src={product.imageSrc}
					alt={product.name}
					height={300}
					width={300}
				/>
			</div>
			<div>
				<h3 className='text-3xl text-primaryText'>{product.name}</h3>
				<div className='mt-1 flex text-lg'>
					<p className='mr-2'>Price</p>
					<p>&#8377;{product.price}</p>
				</div>
			</div>
			<div className='my-5 flex w-full justify-center'>
				<button
					onClick={handleDecrementQuantity}
					className='rounded-md bg-red-400 p-2 shadow-md'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M18 12H6'
						/>
					</svg>
				</button>
				<span className='mx-5 rounded-md bg-white py-2 px-4 shadow-md'>
					{product.quantity}
				</span>
				<button
					onClick={handleIncrementQuantity}
					className='rounded-md bg-secondaryBg p-2 shadow-md'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-6 w-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 6v12m6-6H6'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Card;
