import React from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import './CourseCard.css';

const CourseCard = ({ id, title, description, authors, duration, created }) => {
	const formatAuthors = authors.join(' ');
	const navigate = useNavigate();

	return (
		<div className='course-ctr'>
			<div className='description-ctr'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='info-ctr'>
				<p>Duration: {duration}</p>
				<span>Authors: {formatAuthors}</span>
				<p>Created: {created}</p>
				<Button
					text='Show course'
					onClick={() => navigate(`/courseinfo/${id}`)}
				/>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	id: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	description: propTypes.string.isRequired,
	authors: propTypes.array.isRequired,
	duration: propTypes.string.isRequired,
	created: propTypes.string.isRequired,
};

export default CourseCard;
