import React from 'react';
import propTypes from 'prop-types';
import './Button.css';

const Button = ({ text, onClick, type }) => (
	<button
		className='button'
		type={type === 'button' ? 'button' : 'submit'}
		onClick={onClick}
	>
		{text}
	</button>
);

Button.propTypes = {
	text: propTypes.string.isRequired,
	type: propTypes.string,
	onClick: propTypes.func,
};

Button.defaultProps = {
	onClick: null,
	type: 'button',
};

export default Button;
