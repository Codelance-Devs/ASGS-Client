import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact_form() {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},

		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, 'Name must be 20 characters or less.')
				.required('Name is required'),
			email: Yup.string()
				.email('Invalid email address')
				.required('Email is required'),
			phone: Yup.string()
				.required()
				.matches(/^[0-9]+$/, 'Must be only digits')
				.min(10, 'Must be exactly 10 digits')
				.max(10, 'Must be exactly 10 digits'),
		}),

		onSubmit: (values) => {
			console.log('form submitted');
			console.log(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className='bg-primaryBg'>
			<div className='mt-6  '>
				{/* Name input field */}
				<div className='pb-4'>
					<label
						htmlFor='name'
						className={`font-latoBold block px-4 pb-2 text-2xl ${
							formik.touched.name && formik.errors.name
								? 'text-red-400'
								: ''
						} `}
					>
						{formik.touched.name && formik.errors.name
							? formik.errors.name
							: 'Name'}
					</label>
					<p className='font-latoBold text-sm text-red-400 '></p>
					<input
						className='w-1/2 rounded-md border-2 border-gray-500 p-2 text-xl '
						type='text'
						name='name'
						placeholder='Enter your name'
						onChange={formik.handleChange}
						value={formik.values.name}
						onBlur={formik.handleBlur}
					/>
				</div>
				<div className='pb-4'>
					<label
						htmlFor='email'
						className={`font-latoBold block px-4 pb-2 text-2xl ${
							formik.touched.email && formik.errors.email
								? 'text-red-400'
								: ''
						}`}
					>
						{formik.touched.email && formik.errors.email
							? formik.errors.email
							: 'Email'}
					</label>
					<p></p>
					<input
						className='w-1/2 rounded-md border-2 border-gray-500 p-2  text-xl'
						type='email'
						name='email'
						placeholder='Enter your email address'
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
					/>
				</div>

				<div className='pb-4'>
					<label
						htmlFor='phone'
						className={`font-latoBold block px-4 pb-2 text-2xl ${
							formik.touched.phone && formik.errors.phone
								? 'text-red-400'
								: ''
						}`}
					>
						{formik.touched.phone && formik.errors.phone
							? formik.errors.phone
							: 'Phone'}
					</label>

					<p></p>
					<input
						className='w-1/2 rounded-md border-2 border-gray-500 p-2  text-xl'
						type='text'
						name='phone'
						placeholder='Enter your phone number'
						onChange={formik.handleChange}
						value={formik.values.phone}
						onBlur={formik.handleBlur}
					/>
				</div>

				<div className='pb-4'>
					<label htmlFor='message' className='px-4 text-2xl'>
						Message
					</label>

					<br />
					<textarea
						className='w-1/2 rounded-md border-2 border-gray-500 p-2  text-xl'
						rows={5}
						cols={10}
						name='message'
						placeholder='Enter your message'
						onChange={formik.handleChange}
						value={formik.values.message}
					/>
				</div>
			</div>
		</form>
	);
}
