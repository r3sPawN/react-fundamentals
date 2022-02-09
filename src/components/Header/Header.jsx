import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.css';

const Header = () => (
	<div className='header'>
		<div>
			<Logo />
		</div>
		{localStorage.hasToken && (
			<div className='container'>
				<h3>{localStorage.userName}</h3>
				<Button text='Log out' />
			</div>
		)}
	</div>
);

export default Header;
