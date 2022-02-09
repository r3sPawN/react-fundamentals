import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { loginService } from '../../service/Service';

const Login = () => {
	const navigate = useNavigate();
	const handleLogin = async (userInformation) => {
		const response = await loginService(userInformation);
		if (response.successful) {
			const userToken = response.result;
			const userName = response.user.name;
			localStorage.setItem('hasToken', userToken);
			localStorage.setItem('userName', userName);
			navigate('/courses');
		}
	};
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.min(6, `Must be 6 characters or more`)
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
		}),
		onSubmit: (values) => {
			handleLogin(values);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
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

			<label htmlFor='password'>Password</label>
			<Input
				id='password'
				name='password'
				type='password'
				placeholder='password'
				onChange={formik.handleChange}
				value={formik.values.email}
			/>

			{formik.errors.password ? <div>{formik.errors.password}</div> : null}

			<Button text='Submit' type='submit' />
			<Link to='/registration'>
				If you do not have registration go to the Registartion page
			</Link>
		</form>
	);
};

export default Login;
