import React from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import './Courses.css';
import getAuthors from '../../helpers/getAuthors';
import pipeDuration from '../../helpers/pipeDuration';
import Searchbar from './components/Searchbar/Searchbar';

const Courses = ({ courseData, changeData }) => {
	const navigate = useNavigate();
	const courses = courseData.map((course) => (
		<CourseCard
			key={uuidv4()}
			id={course.id}
			title={course.title}
			description={course.description}
			authors={course.authors.map((id) => getAuthors(id))}
			duration={pipeDuration(course.duration)}
			created={course.creationDate}
		/>
	));

	return (
		<div>
			<div className='search-ctr'>
				<div>
					<Searchbar data={courseData} changeData={changeData} />
				</div>
				<div>
					<Button
						text='Add course'
						onClick={() => {
							navigate('add');
						}}
					/>
				</div>
			</div>
			<div>{courses}</div>
		</div>
	);
};

Courses.propTypes = {
	courseData: propTypes.array.isRequired,
	changeData: propTypes.func.isRequired,
};

export default Courses;
