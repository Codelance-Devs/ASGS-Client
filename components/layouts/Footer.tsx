import React, { Fragment } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
	const socials = [
		{
			url: 'https://wa.me/+918637459289',
			Icon: FaWhatsapp,
		},
		{
			url: '#',
			Icon: MdFacebook,
		},
		{
			url: '#',
			Icon: AiFillInstagram,
		},
	];

	const pageOptions = [
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
			name: 'Privacy Policy',
			url: '/privacy-policy',
		},
		{
			name: 'Terms of Conditions',
			url: '/terms-of-conditions',
		},
	];

	return (
		<footer className=' bg-primaryBg'>
			<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<Link href={'/'} className='w-fit lg:mx-auto'>
							<h1 className='font-primaryFont text-xl font-semibold'>
								<span className='rounded border border-primaryText bg-secondaryBg px-1 py-2'>
									ASGS
								</span>{' '}
								Supermarket
							</h1>
						</Link>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
						<div>
							<ul className='font-medium text-primaryText'>
								{pageOptions.map((option, index) => (
									<li className='mb-4' key={index}>
										<Link
											href={option.url}
											className='hover:underline'
										>
											{option.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<ul className='font-medium text-primaryText'>
								<li className='mb-4'>
									<a href='' className='hover:underline '>
										Padavettu, Amman Koil St,
									</a>
								</li>
								<li>
									<a href='' className='hover:underline'>
										Chennai, Tamil Nadu 600127
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul className='font-medium text-primaryText'>
								<li className='mb-4'>
									<a href='#' className='hover:underline'>
										6:00 - 22:00 (weekdays)
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										9:00 - 20:00 (sat-sun)
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='w-full'>
					<h2 className='font-primaryFont text-xl font-semibold'>
						Location
					</h2>
					<div className='mt-4 w-full'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7242735414575!2d80.12936921461072!3d12.86107709092841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525995e0e89f43%3A0x578a303970914fb4!2sAyyanar%20shakkthi%20general%20stores!5e0!3m2!1sen!2sin!4v1675509826237!5m2!1sen!2sin'
							className='h-[20rem] w-full object-contain'
						></iframe>
					</div>
				</div>
				<hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-primaryText sm:text-center'>
						© 2023{' '}
						<Link href='/' className='hover:underline'>
							ASGS Supermarket
						</Link>
						. All Rights Reserved.
					</span>
					<div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
						<ul>
							{socials.map((social, index) => (
								<li key={index}>
									<Link
										href={social.url}
										className=' text-primaryText hover:text-gray-900 '
										target='_blank'
									>
										{<social.Icon className='h-5 w-5' />}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
