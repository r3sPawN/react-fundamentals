import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { registerService } from '../../service/Service';
import './Registration.css';

const Registration = () => {
	const navigate = useNavigate();

	async function handelRegistration(values) {
		const response = await registerService(values);

		if (response.successful) {
			navigate('/login');
		}
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			password: '',
			email: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Required'),
			password: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.min(6, `Must be 6 characters or more`)
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
		}),
		onSubmit: (values) => {
			handelRegistration(values);
		},
	});
	return (
		<form className='form' onSubmit={formik.handleSubmit}>
			<label htmlFor='name'>Name</label>
			<Input
				id='name'
				name='name'
				type='name'
				placeholder='name'
				onChange={formik.handleChange}
				value={formik.values.email}
			/>

			{formik.errors.name ? <div>{formik.errors.name}</div> : null}

			<label htmlFor='password'>Password</label>
			<Input
				id='password'
				name='password'
				type='password'
				placeholder='password'
				onChange={formik.handleChange}
				value={formik.values.email}
			/>

			<label htmlFor='email'>Email Address</label>
			<Input
				id='email'
				name='email'
				type='email'
				placeholder='Email'
				onChange={formik.handleChange}
				value={formik.values.email}
			/>

			{formik.errors.email ? <div>{formik.errors.email}</div> : null}

			{formik.errors.password ? <div>{formik.errors.password}</div> : null}

			<Button text='Submit' type='submit' />
			<Link to='/login'>If you have registration go to the Login page</Link>
		</form>
	);
};

export default Registration;
