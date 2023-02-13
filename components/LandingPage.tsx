import { LANDINGPAGE } from '@/utils/constants';
import Image from 'next/image';
import prop1 from '../public/assets/prop1.svg';
import prop2 from '../public/assets/prop2.svg';
import prop3 from '../public/assets/prop3.svg';
import BG from '../public/assets/bg.jpg';

const LandingPage = () => {
	return (
		<main className='mx-auto flex min-h-screen w-full flex-col items-center justify-start md:w-[90%] md:flex-row lg:w-[85%] xl:w-[80%] 2xl:w-[70%]'>
			<section className='flex w-[80%] flex-col items-center text-center md:w-[50%] md:items-start md:text-left'>
				<h1 className='mt-[5%] font-primaryFont text-[9vw] text-primaryText md:mt-[0%] md:text-[5.5vw]'>
					<p>
						{LANDINGPAGE.TITLE_P1}
						<span className='ml-[1%] font-secondaryFont'>
							{LANDINGPAGE.TITLE_P2}
						</span>
					</p>
					<p>{LANDINGPAGE.TITLE_P3}</p>
				</h1>
				<div className='font-base my-[7%] flex w-fit text-center text-sm'>
					<div className='flex max-w-[120px] flex-col items-center'>
						<div>
							<Image width={60} height={60} src={prop1} alt='' />
						</div>
						<p className='mt-[5%] font-secondaryFont text-primaryText'>
							{LANDINGPAGE.SUB_TITLE_1}
						</p>
					</div>
					<div className='mx-[5%] flex max-w-[120px]  flex-col items-center'>
						<div>
							<Image width={60} height={60} src={prop2} alt='' />
						</div>
						<p className='mt-[5%] font-secondaryFont text-primaryText'>
							{LANDINGPAGE.SUB_TITLE_2}
						</p>
					</div>
					<div className='flex max-w-[120px] flex-col items-center '>
						<div>
							<Image width={72} height={72} src={prop3} alt='' />
						</div>
						<p className='mt-[5%] font-secondaryFont text-primaryText'>
							{LANDINGPAGE.SUB_TITLE_3}
						</p>
					</div>
				</div>
				<button className='w-fit rounded-md border border-primaryText bg-secondaryBg px-[8%] py-[3%] font-secondaryFont text-primaryText'>
					{LANDINGPAGE.BUTTON}
				</button>
			</section>
			<section className='w-[90%] md:w-[50%]'>
				<div className='p-[3%]'>
					<Image
						className='rounded-t-full border-4 border-secondaryBg'
						src={BG}
						alt=''
					/>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
