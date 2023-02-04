import React, { Fragment } from 'react';
import Image from 'next/image';
import Icon from '../../assets/icon.png';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>

			<footer className="bg-gray-800 text-white py-10">
				<div className="container mx-auto m-4 flex flex-nowrap flex-row items-center">
					<ul className="flex items-center">
						<li><Link className="p-4  mr-6 text-xl" href="#">Home</Link></li>
						<li><Link className="p-4 mr-6 text-xl" href="#">Products</Link></li>
						<li><Link className="p-4 mr-6 text-xl" href="#">FAQ</Link></li>
						<li><Link className="p-4 mr-6 text-xl" href="#">Visit</Link></li>
					</ul>
					<div className='m-auto'>
						<h1 className=" p-4 text-white-500 mx-auto text-2xl" >Location:</h1>
						<h4><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7242735414575!2d80.12936921461072!3d12.86107709092841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525995e0e89f43%3A0x578a303970914fb4!2sAyyanar%20shakkthi%20general%20stores!5e0!3m2!1sen!2sin!4v1675509826237!5m2!1sen!2sin" width="400" height="300" ></iframe></h4>

					</div>

					<div className='m-auto'>
						<h1 className=" p-4 text-white-500 mx-auto text-2xl">Whatsapp No.</h1>
						<h2 className=" p-4 text-white-500 mx-auto text-2xl">Kanaga Velraj</h2>
						<Link href={`tel:${+918637459289}`} className=" p-4 text-white-500 mx-auto text-2xl">+91 8637459289</Link>
					</div>

				</div>

			</footer>


		</div>


	)
};

export default Footer;
