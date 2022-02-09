/* eslint-disable no-shadow */
import { useState } from 'react';

const useAuthors = (authors) => {
	const [selectableAuthors, setSelectableAuthors] = useState(authors);
	const [selectedAuthors, setSelectedAuthors] = useState([]);

	const removeAuthors = (name) => {
		setSelectableAuthors(selectableAuthors.filter((author) => author !== name));
		setSelectedAuthors((selectedAuthors) => [...selectedAuthors, name]);
	};

	const revertAuthors = (name) => {
		setSelectedAuthors(selectedAuthors.filter((author) => author !== name));
		setSelectableAuthors((setSelectableAuthors) => [
			...setSelectableAuthors,
			name,
		]);
	};

	return [selectableAuthors, removeAuthors, selectedAuthors, revertAuthors];
};

export default useAuthors;
