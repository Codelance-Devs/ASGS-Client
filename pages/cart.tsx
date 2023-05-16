import Header from '@/components/cart/Header';
import Card from '@/components/cart/Card';
import { useContext, useState, useEffect } from 'react';
import AppContext from '@/context/AppContext';
import Link from 'next/link';
import Head from 'next/head';

const CartPage = () => {
	const { cart } = useContext(AppContext);
	return (
		<>
			<Head>
				<title>Cart | ASGS</title>
			</Head>
			<div>
				<div className='container mx-auto'>
					<div>
						<Header />
					</div>
					<div className='grid-rows-auto m-10 mx-auto grid w-full grid-cols-1 gap-8 px-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
						{cart.length > 0 ? (
							cart.map((product) => (
								<Card key={product.id} product={product} />
							))
						) : (
							<span>
								Uh oh! Your cart is empty! View{' '}
								<Link
									href='/products'
									className='underline underline-offset-4 hover:text-primaryText'
								>
									Products
								</Link>{' '}
								to shop now.
							</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPage;
