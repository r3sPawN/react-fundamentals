import { v4 as uuidv4 } from 'uuid';
import dateGenerator from './dateGeneratop';
import getAuthorsID from './getAuthorsID';

export const createNewAuthor = (id, name) => ({ id, name });

export const createNewData = (title, description, authors, duration) => {
	let newCoures = {};

	newCoures = {
		id: uuidv4(),
		title,
		description,
		duration,
		creationDate: dateGenerator(),
		authors: authors.map((author) => getAuthorsID(author)),
	};

	return newCoures;
};
