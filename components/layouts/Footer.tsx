import React, { Fragment } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
	const socials = [
		{
			url: 'https://wa.me/+918637459289',
			Icon: FaWhatsapp,
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
	];

	return (
		<footer className='mt-20 py-8 px-4 bg-primaryBg'>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-primaryText'>
				<div>
					<Link href={'/'} className='w-fit lg:mx-auto'>
						<h1 className='font-primaryFont font-semibold text-xl'>
							<span className='px-1 py-2 rounded border bg-secondaryBg border-primaryText'>
								ASGS
							</span>{' '}
							Supermarket
						</h1>
					</Link>
					<ul className='mt-8 text-primaryText text-xl'>
						{socials.map((social, index) => (
							<li key={index}>
								<Link href={social.url} target='_blank'>
									{<social.Icon />}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='w-full'>
					<h2 className='font-primaryFont font-semibold text-xl'>
						Location
					</h2>
					<div className='w-full mt-4'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7242735414575!2d80.12936921461072!3d12.86107709092841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525995e0e89f43%3A0x578a303970914fb4!2sAyyanar%20shakkthi%20general%20stores!5e0!3m2!1sen!2sin!4v1675509826237!5m2!1sen!2sin'
							className='w-full object-contain h-[20rem]'
						></iframe>
					</div>
				</div>
				<ul className='grid grid-cols-1 md:grid-cols-2 h-min w-full text-xl justify-items-center'>
					{pageOptions.map((option, index) => (
						<li
							key={index}
							className='hover:underline decoration-primaryText underline-offset-2'
						>
							<Link href={option.url}>{option.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
