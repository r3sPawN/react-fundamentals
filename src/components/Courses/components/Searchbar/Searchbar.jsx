/* eslint-disable array-callback-return */
import React from 'react';
import propTypes from 'prop-types';
import Input from '../../../../common/Input/Input';
import { mockedCoursesList } from '../../../../constants';

const Searchbar = ({ data, changeData }) => {
	const search = (searchTerm) => {
		data.filter((course) => {
			if (!searchTerm) {
				changeData(mockedCoursesList);
			} else if (
				course.title.toLowerCase().includes(searchTerm.toLowerCase())
			) {
				changeData([course]);
			}
		});
	};
	return (
		<div>
			<Input
				placeholder=' course name'
				class='text'
				onChange={(event) => search(event.target.value)}
			/>
		</div>
	);
};

Searchbar.propTypes = {
	data: propTypes.array.isRequired,
	changeData: propTypes.func.isRequired,
};

export default Searchbar;
