import Image from 'next/image';
import prop4 from '@/public/assets/prop4.svg';
import { ERRORPAGE } from '@/utils/constants';
import Head from 'next/head';

export default function notfound() {
	return (
		<>
			<Head>
				<title>Page not found | ASGS</title>
			</Head>
			<div className='flex min-h-screen flex-col items-center justify-center drop-shadow-2xl'>
				<div className='relative mx-8 bg-primaryBg px-5 py-32 text-center sm:px-20'>
					<div className='text-8xl text-primaryText sm:text-9xl'>
						{ERRORPAGE.TITLE_1}
					</div>
					<div className='my-5 text-3xl text-primaryText sm:text-5xl'>
						{ERRORPAGE.TITLE_2}
					</div>
					<div className='text-lg text-primaryText sm:text-xl'>
						{ERRORPAGE.TITLE_3}
					</div>
					<div className='absolute -bottom-8 -right-8'>
						<Image
							height={150}
							width={150}
							src={prop4}
							alt='prop'
						/>
					</div>
				</div>
			</div>
		</>
	);
}
