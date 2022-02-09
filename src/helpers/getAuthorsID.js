/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { mockedAuthorsList } from '../constants';

const getAuthorsID = (name) =>
	mockedAuthorsList.filter((author) => {
		if (author.name === name) return author.id;
	});

export default getAuthorsID;
