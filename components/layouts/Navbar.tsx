import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('');
	const router = useRouter();

	useEffect(() => {
		setActiveLink(router.pathname);
	}, [router.pathname]);

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
		<nav className='relative z-[9999] w-full bg-primaryBg border-b-primaryText border-b'>
			<div className='container z-50 mx-auto flex items-center justify-between border-b-primaryText px-4 py-6 text-primaryText lg:justify-start'>
				<ul className='hidden items-center gap-4 text-lg lg:flex'>
					{navOptions.map((option, index) => (
						<li
							key={index}
							className='decoration-primaryText underline-offset-4 hover:underline'
						>
							<Link
								href={option.url}
								className={
									activeLink === option.url
										? 'font-semibold underline'
										: ''
								}
							>
								{option.name}
							</Link>
						</li>
					))}
				</ul>
				<Link href={'/'} className='w-fit lg:mx-auto'>
					<h1 className='font-primaryFont text-xl font-semibold'>
						<span className='rounded border border-primaryText bg-secondaryBg px-1 py-2'>
							ASGS
						</span>{' '}
						<span className='font-secondaryFont font-semibold'>
							Supermarket
						</span>
					</h1>
				</Link>
				<div className='hidden items-center gap-4 lg:flex'>
					<h2 className='hidden max-w-[200px] text-xs xl:block'>
						Padavettu, Amman Koil St, Chennai, Tamil Nadu 600127
					</h2>
					<button className='rounded border border-secondaryBg bg-primaryText px-4 py-2.5 text-sm text-secondaryBg font-semibold transition-all duration-300 hover:border-primaryText hover:bg-secondaryBg hover:text-primaryText'>
						Our Products
					</button>
					<button className='flex justify-between items-center rounded border border-secondaryBg bg-primaryText px-4 py-2 text-sm text-secondaryBg transition-all duration-300 hover:border-primaryText hover:bg-secondaryBg hover:text-primaryText'>
						<span className='mr-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
								/>
							</svg>
						</span>
						<span className='font-semibold'>Cart {0}</span>
					</button>
				</div>
				<div className='flex'>
					<button className='lg:hidden flex justify-between items-center rounded border border-secondaryBg bg-primaryText p-2 text-sm text-secondaryBg transition-all duration-300 hover:border-primaryText hover:bg-secondaryBg hover:text-primaryText mr-2'>
						<span className='mr-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
								/>
							</svg>
						</span>
						<span className='font-semibold'>{0}</span>
					</button>
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
			</div>
			<div
				className={`${
					open ? 'top-[91px]' : '-top-[500%]'
				} absolute -z-50 min-h-fit w-full bg-secondaryBg font-secondaryFont text-primaryText transition-all duration-500 lg:hidden shadow-xl`}
			>
				<ul className='flex flex-col gap-2 px-4 py-3 font-medium'>
					{navOptions.map((option, index) => (
						<li
							key={index}
							className='border-b border-primaryText/40 my-2'
						>
							<Link
								href={option.url}
								className={
									activeLink === option.url
										? 'font-semibold'
										: ''
								}
							>
								{option.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
