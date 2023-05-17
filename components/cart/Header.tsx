import React, { useContext, useMemo } from 'react';
import DispatchContext from '@/context/DispatchContext';
import AppContext from '@/context/AppContext';

const CHECKOUT_CONTACT_NUM = '917200249230';

function Header() {
	const { cart } = useContext(AppContext);
	const dispatch = useContext(DispatchContext);

	const itemCount = useMemo(() => {
		let count = 0;
		cart.length > 0 &&
			cart.forEach((item) => {
				count += item.quantity ?? 0;
			});
		return count;
	}, [cart]);

	const totalCost = useMemo(() => {
		let cost = 0;
		cart.length > 0 &&
			cart.forEach((item) => {
				const itemCost = (item.quantity ?? 0) * item.price;
				cost += itemCost;
			});
		return cost;
	}, [cart]);

	const handleClearCart = () => {
		dispatch({ type: 'CLEAR_CART', payload: {} as ProductType });
	};

	const handleCheckoutCart = () => {
		const CART_ITEMS = cart
			.map(
				(item, index) =>
					`${index + 1}. ${item.name} - ${item.quantity} nos * ₹${
						item.price
					} = ₹${item.quantity! * item.price}`
			)
			.join('\n');
		const MESSAGE = encodeURIComponent(
			`Hey there! I'm looking to order the following items:\n\n${CART_ITEMS}\n\nSub Total: ₹${totalCost}\nTotal Number of Items (items * quantity each): ${itemCount}`
		);

		if (typeof window !== 'undefined') {
			window.open(
				`https://wa.me/${CHECKOUT_CONTACT_NUM}?text=${MESSAGE}`,
				'_blank'
			);
		}
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
				<div className='grid gird-cols-1 md:grid-cols-2 gap-4 place-items-center border-b border-neutral-400 pb-5'>
					<div>
						<h2 className='text-3xl text-primaryText font-bold '>
							Cart Items
						</h2>
						<p className='text-xl font-semibold'>
							Your cart contains {itemCount} items.
						</p>
						<div className='flex text-xl font-semibold'>
							<p className=''>Cart Sub Total: ₹{totalCost}</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<button
							className='group relative inline-block pt-1 text-lg'
							onClick={handleCheckoutCart}
							disabled={cart.length === 0}
						>
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
						{cart.length > 0 && (
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
