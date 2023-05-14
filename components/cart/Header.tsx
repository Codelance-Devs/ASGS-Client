import React, { useContext } from 'react';
import DispatchContext from '@/context/DispatchContext';
import AppContext from '@/context/AppContext';

function Header() {
	const { cart } = useContext(AppContext);
	const dispatch = useContext(DispatchContext);

	const handleClearCart = () => {
		dispatch({ type: 'CLEAR_CART', payload: {} as ProductType });
	};

	return (
		<div className='m-10'>
			<div className='text-center bg-secondaryBg rounded-md shadow-lg p-10'>
				<h1 className='text-6xl font-primaryFont font-bold text-primaryText my-3'>
					Your Cart
				</h1>
				<p className='text-primaryText font-semibold text-xl mb-3'>
					Add items to your cart and checkout to place your order.
				</p>
			</div>
			<div className='mt-10'>
				<div className='flex justify-between items-center border-b border-neutral-400 pb-5'>
					<div>
						<h2 className='text-3xl text-primaryText font-bold '>
							Cart Items
						</h2>
						<p className='text-xl font-semibold'>
							Your cart contains x items.
						</p>
						<div className='flex text-xl font-semibold'>
							<p className=''>Cart SubTotal:&nbsp;</p>
							<p>{500}</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<button className='group relative inline-block pt-1 text-lg'>
							<span className='relative z-[1] block cursor-pointer overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-primaryText'>
								<span className='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-2'></span>
								<span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondaryBg transition-all duration-300 group-hover:-rotate-180'></span>
								<span className='relative'>Checkout</span>
							</span>
							<span
								className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
								data-rounded='rounded-lg'
							></span>
						</button>
						{cart.length && (
							<button
								onClick={handleClearCart}
								className='text-red-500 hover:underline underline-offset-4 transition-all duration-300'
							>
								Clear Cart
							</button>
						)}
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Header;
