import React from 'react';
import propTypes from 'prop-types';
import './Input.css';

const Textarea = ({ placeholder, onChange, style }) => (
	<textarea
		className={style}
		placeholder={`Enter ${placeholder}`}
		onChange={onChange}
	/>
);

Textarea.propTypes = {
	placeholder: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	style: propTypes.string,
};

Textarea.defaultProps = {
	style: 'description',
};

export default Textarea;
