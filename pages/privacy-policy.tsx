import { POLICYPAGE } from '@/utils/constants';
import Head from 'next/head';

export default function terms() {
	return (
		<>
			<Head>
				<title>Privacy Policy | ASGS</title>
			</Head>
			<div className='text-md mx-10 flex items-center justify-center text-primaryText sm:text-lg'>
				<div className='container my-10 sm:my-32 lg:w-[70%] xl:w-[60%]'>
					<div className='mb-5'>
						<h1 className='font-primaryFont text-5xl sm:text-7xl xl:text-8xl'>
							{POLICYPAGE.TITLE_1}
						</h1>
						<p className='my-2'>{POLICYPAGE.SUB_TITLE_1}</p>
					</div>
					<div>
						<ul className='ml-4 list-disc'>
							{POLICYPAGE.LIST_ITEMS.map((item, index) => (
								<li key={index}>
									<h3 className='text-lg font-medium capitalize'>
										{item.title}
									</h3>
									<p>{item.description}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
