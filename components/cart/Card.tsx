import { useContext } from 'react';
import Image from 'next/image';
import DispatchContext from '@/context/DispatchContext';
import { GrSubtract, GrAdd } from 'react-icons/gr';

interface Props {
	product: ProductType;
}

function Card({ product }: Props) {
	const dispatch = useContext(DispatchContext);

	const handleIncrementQuantity = () => {
		dispatch({ type: 'INCREMENT_ITEM_QUANTITY', payload: product });
	};

	const handleDecrementQuantity = () => {
		dispatch({ type: 'DECREMENT_ITEM_QUANTITY', payload: product });
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
					<GrSubtract />
				</button>
				<span className='mx-5 rounded-md bg-white py-2 px-4 shadow-md'>
					{product.quantity}
				</span>
				<button
					onClick={handleIncrementQuantity}
					className='rounded-md bg-secondaryBg p-2 shadow-md'
				>
					<GrAdd />
				</button>
			</div>
		</div>
	);
}

export default Card;
