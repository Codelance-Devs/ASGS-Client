import Image from 'next/image';

export default function about() {
	return (
		<section className='body-font text-gray-600'>
			<div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
				<div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
					<h1 className='title-font mb-4 text-left font-primaryFont text-5xl text-primaryText sm:text-6xl'>
						We find the most
						<br className='hidden lg:inline-block' />
						nutritious options out there
					</h1>
					<p className='mb-8 text-left leading-relaxed'>
						Et harum quidem rerum facilis est et expedita
						distinctio. Nam libero tempore, cum soluta nobis est
						eligendi optio cumque nihil impedit quo minus id
						quod maxime placeat facere possimus, omnis voluptas
						assumenda est, omnis dolor repellendus. Temporibus
						autem quibusdam et aut officiis debitis aut rerum
						necessitatibus saepe eveniet. ‍
						<br className='hidden font-secondaryFont lg:inline-block' />
						Welcomed and every pain avoided. But in certain
						circumstances and owing to the claims of duty or the
						obligations of business it will frequently occur
						that pleasures have to be repudiated and annoyances
						accepted.
					</p>
				</div>
				<div className='w-5/6 rounded-t-full border-4 border-secondaryBg md:w-1/2 lg:w-full lg:max-w-lg'>
					<Image
						className='rounded rounded-t-full object-cover object-center'
						alt=''
						src={'/assets/about1.jpeg'}
						width={800}
						height={900}
					/>
				</div>
			</div>
		</section>

		{/* second banner  */}
		<section className='body-font text-gray-600'>
			<div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
				<div className='mb-10 flex w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
					<Image
						className='rounded object-cover object-center'
						alt='hero'
						src={'/assets/about2.jpeg'}
						width={420}
						height={500}
					/>
				</div>
				<div className='flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
					<h1 className='title-font mb-4 text-left font-primaryFont  text-4xl font-medium text-primaryText sm:text-5xl'>
						Our mission is to help people save time while
						enjoying authentic home-cooking food with the most
						beneficial options
						<br className='hidden lg:inline-block' />
					</h1>
					<p className='mb-8 text-left font-secondaryFont leading-relaxed '>
						At vero eos et accusamus et iusto odio dignissimos
						ducimus qui blanditiis praesentium voluptatum
						deleniti atque corrupti quos dolores et quas
						molestias excepturi sint occaecati cupiditate non
						provident.
					</p>
					<div className='flex justify-center'>
						<button className='inline-flex rounded border-2 border-primaryText  bg-secondaryBg py-2 px-6 font-secondaryFont text-lg text-primaryText hover:bg-primaryText hover:text-secondaryBg focus:outline-none'>
							Contact Us
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
