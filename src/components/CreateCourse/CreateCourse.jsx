/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Input/Textarea';
import { mockedAuthorsList } from '../../constants';
import pipeDuration from '../../helpers/pipeDuration';
import getAuthorsByName from '../../helpers/getAuthorsByName';
import useAuthors from '../../hooks/useAuthors';
import EditAuthors from './components/EditAuthors';
import './CreateCourse.css';
import { createNewData } from '../../helpers/createNewData';

const CreateCourse = ({
	courseData,
	changeData,
	changeAuthor,
	stateOfAuthors,
}) => {
	const [timeInHours, setTimeInHours] = useState(0);
	const authors = getAuthorsByName(mockedAuthorsList);
	const [customAuthor, setCustomAuthor] = useState('');
	const [selectableAutors, removeAuthor, selectedAuthors, revertAuthors] =
		useAuthors(authors);
	const [title, SetTitle] = useState('');
	const [descrption, SetDescption] = useState('');

	const createCourse = () => {
		if ((title, descrption, selectedAuthors, timeInHours)) {
			if (selectedAuthors) {
				selectedAuthors.map((author) =>
					changeAuthor([...stateOfAuthors, { id: uuidv4(), name: author }])
				);
			}
			const newCourse = createNewData(
				title,
				descrption,
				selectedAuthors,
				timeInHours
			);

			changeData([...courseData, newCourse]);
		} else {
			alert(`Please enter all the fields!`);
		}
	};

	return (
		<div className='create-courses-ctr'>
			<label htmlFor='Title'>Title:</label>
			<div className='title-ctr'>
				<Input
					name='Title'
					placeholder=' title'
					class='text'
					onChange={(event) => SetTitle(event.target.value)}
				/>
				<Button text='Create course' onClick={createCourse} />
			</div>
			<label htmlFor='description'>Description:</label>
			<div className='description'>
				<Textarea
					class='description'
					placeholder=' course description'
					onChange={(event) => SetDescption(event.target.value)}
				/>
			</div>
			<div className='information-ctr'>
				<div className='create-author'>
					<label htmlFor='Author'>Authors:</label>
					<Input
						name='Author'
						placeholder=' author name..'
						class='text'
						onChange={(event) => setCustomAuthor(event.target.value)}
					/>
					<Button
						text='Create author'
						onClick={() => removeAuthor(customAuthor)}
					/>
					<Input
						class='text'
						name='Duration'
						placeholder=' how long is the course'
						onChange={(e) => {
							setTimeInHours(e.target.value);
						}}
					/>
					<h3>Duration: {pipeDuration(timeInHours)}</h3>
				</div>
				<div className='delete-author'>
					<EditAuthors
						onClickDelete={removeAuthor}
						onClickAdd={revertAuthors}
						selectableAutors={selectableAutors}
						selectedAuthors={selectedAuthors}
					/>
				</div>
			</div>
		</div>
	);
};

CreateCourse.propTypes = {
	courseData: propTypes.array.isRequired,
	changeData: propTypes.func.isRequired,
	changeAuthor: propTypes.func.isRequired,
	stateOfAuthors: propTypes.array.isRequired,
};

export default CreateCourse;
