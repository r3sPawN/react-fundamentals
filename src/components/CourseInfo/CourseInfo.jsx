/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import propTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import pipeDuration from '../../helpers/pipeDuration';

// eslint-disable-next-line react/prop-types
const CourseInfo = ({ coursesData }) => {
	const params = useParams();
	const currentCourse = coursesData.find((course) => course.id === params.id);
	return (
		<div>
			<div>
				<Link to='/courses'>Back to all courses</Link>
			</div>
			<div>
				<h1>{currentCourse.title}</h1>
				<p>{currentCourse.description}</p>
			</div>
			<div>
				<span>Id: {currentCourse.id}</span>
				<span>Duration: {pipeDuration(currentCourse.duration)}</span>
				<span>Authors: {}</span>
			</div>
		</div>
	);
};
CourseInfo.propsTypes = {
	coursesData: propTypes.array.isRequired,
};

export default CourseInfo;
