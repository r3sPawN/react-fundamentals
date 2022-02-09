import React from 'react';
import propTypes from 'prop-types';
import './Input.css';

const Input = ({ id, name, type, placeholder, onChange, className }) => (
	<input
		id={id}
		name={name}
		type={type}
		placeholder={`Enter ${placeholder}`}
		onChange={onChange}
		className={className}
	/>
);

Input.propTypes = {
	id: propTypes.string,
	name: propTypes.string,
	type: propTypes.string,
	placeholder: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	className: propTypes.string,
};

Input.defaultProps = {
	className: 'text',
	type: `text`,
	id: null,
	name: null,
};

export default Input;
