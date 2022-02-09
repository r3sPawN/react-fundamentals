import { mockedAuthorsList } from '../constants';

const getAuthors = (id) =>
	mockedAuthorsList
		.filter((author) => author.id === id)
		.map((name) => name.name);

export default getAuthors;
