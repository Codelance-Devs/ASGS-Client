import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const navOptions = [
		{
			name: 'Home',
			url: '/',
		},
		{
			name: 'Products',
			url: '/products',
		},
		{
			name: 'About',
			url: '/about',
		},
		{
			name: 'How it works?',
			url: '/ordering-process',
		},
		{
			name: 'Contact',
			url: '/contact'
		},
		{
			name: 'Orders',
			url:'/orders'
		}
	];

	return (
		<nav className='relative z-50 lg:border-b-primaryText lg:border-b bg-primaryBg w-full'>
			<div className='container mx-auto flex items-center text-primaryText lg:border-b-0 border-b-primaryText border-b justify-between lg:justify-start px-4 py-6 z-20'>
				<ul className='hidden lg:flex items-center gap-4 text-lg'>
					{navOptions.map((option, index) => (
						<li
							key={index}
							className='hover:underline decoration-primaryText underline-offset-2'
						>
							<Link href={option.url}>{option.name}</Link>
						</li>
					))}
				</ul>
				<Link href={'/'} className='w-fit lg:mx-auto'>
					<h1 className='font-primaryFont font-semibold text-xl'>
						<span className='px-1 py-2 rounded border bg-secondaryBg border-primaryText'>
							ASGS
						</span>{' '}
						Supermarket
					</h1>
				</Link>
				<div className='hidden lg:flex gap-4 items-center'>
					<h2 className='hidden xl:block text-xs max-w-[200px]'>
						Padavettu, Amman Koil St, Chennai, Tamil Nadu 600127
					</h2>
					<button className='bg-primaryText border border-secondaryBg text-secondaryBg rounded px-4 py-2 text-sm transition-all duration-300 hover:border-primaryText hover:bg-secondaryBg hover:text-primaryText'>
						Our Products
					</button>
				</div>
				<button
					onClick={() => setOpen(!open)}
					className={`${
						open
							? 'border-secondaryBg bg-primaryText text-secondaryBg'
							: 'border-primaryText text-primaryText bg-secondaryBg'
					} font-xl border p-3 rounded lg:hidden`}
				>
					<GiHamburgerMenu />
				</button>
			</div>
			<div
				className={`${
					open ? 'top-12' : '-top-40'
				} absolute bg-secondaryBg min-h-fit transition-all duration-500 -z-10 text-primaryText font-secondaryFont w-full pt-10 lg:hidden`}
			>
				<ul className='flex flex-col gap-2 px-4 font-medium py-3'>
					{navOptions.map((option, index) => (
						<li key={index}>
							<Link href={option.url}>{option.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
