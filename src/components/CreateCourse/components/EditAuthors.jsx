import React from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../common/Button/Button';
import './EditAuthor.css';

const EditAuthors = ({
	onClickDelete,
	onClickAdd,
	selectableAutors,
	selectedAuthors,
}) => (
	<>
		<div>
			{selectableAutors.map((author) => (
				<div key={uuidv4()} className='authors'>
					{author}{' '}
					<Button
						text='Add author'
						onClick={() => {
							onClickDelete(author);
						}}
					/>
				</div>
			))}
		</div>
		<div>
			<h3>Current authors:</h3>
			{selectedAuthors.map((author) => (
				<div key={uuidv4()} className='authors'>
					{author}{' '}
					<Button text='Delete author' onClick={() => onClickAdd(author)} />
				</div>
			))}
		</div>
	</>
);

EditAuthors.propTypes = {
	onClickDelete: propTypes.func.isRequired,
	onClickAdd: propTypes.func.isRequired,
	selectableAutors: propTypes.array.isRequired,
	selectedAuthors: propTypes.array.isRequired,
};

export default EditAuthors;
