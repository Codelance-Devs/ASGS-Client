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
	];

	return (
		<nav className='relative z-50 w-full bg-primaryBg lg:border-b lg:border-b-primaryText'>
			<div className='container z-20 mx-auto flex items-center justify-between border-b border-b-primaryText bg-primaryBg px-4 py-6 text-primaryText lg:justify-start lg:border-b-0'>
				<ul className='hidden items-center gap-4 text-lg lg:flex'>
					{navOptions.map((option, index) => (
						<li
							key={index}
							className='decoration-primaryText underline-offset-2 hover:underline'
						>
							<Link href={option.url}>{option.name}</Link>
						</li>
					))}
				</ul>
				<Link href={'/'} className='w-fit lg:mx-auto'>
					<h1 className='font-primaryFont text-xl font-semibold'>
						<span className='rounded border border-primaryText bg-secondaryBg px-1 py-2'>
							ASGS
						</span>{' '}
						Supermarket
					</h1>
				</Link>
				<div className='hidden items-center gap-4 lg:flex'>
					<h2 className='hidden max-w-[200px] text-xs xl:block'>
						Padavettu, Amman Koil St, Chennai, Tamil Nadu 600127
					</h2>
					<button className='rounded border border-secondaryBg bg-primaryText px-4 py-2 text-sm text-secondaryBg transition-all duration-300 hover:border-primaryText hover:bg-secondaryBg hover:text-primaryText'>
						Our Products
					</button>
				</div>
				<button
					onClick={() => setOpen(!open)}
					className={`${
						open
							? 'border-secondaryBg bg-primaryText text-secondaryBg'
							: 'border-primaryText bg-secondaryBg text-primaryText'
					} font-xl rounded border p-3 lg:hidden`}
				>
					<GiHamburgerMenu />
				</button>
			</div>
			<div
				className={`${
					open ? 'top-12' : '-top-[500%]'
				} absolute -z-20 min-h-fit w-full bg-secondaryBg pt-10 font-secondaryFont text-primaryText transition-all duration-500 lg:hidden`}
			>
				<ul className='flex flex-col gap-2 px-4 py-3 font-medium'>
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
