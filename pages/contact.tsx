import PublicLayout from '@/layouts/PublicLayout';
import Form from '@/components/layouts/Contact_form';

export default function contact() {
	return (
		<PublicLayout>
			<div>
				<h1 className='color-primaryFont text-5xlfont-semibold flex justify-center rounded py-12'>
					Contact Us
				</h1>
				<div className='m-2 flex flex-row items-center p-2 text-3xl '>
					<div className='w-1/2'>
						<p className='mx-12 my-2'>
							If you have any questions about our services and
							delivery areas, contact us
						</p>
						<br />
						<h4 className='mx-12 my-2 font-semibold'>Email</h4>
						<p className='mx-12 my-2'>supermarket@gmail.com</p>
						<h4 className='mx-12 my-2 font-semibold'>Phone</h4>
						<p className='mx-12 my-2'>86374 59289</p>
					</div>
					<div className='w-1/2'>
						<Form />
					</div>
				</div>
			</div>
		</PublicLayout>
	);
}
