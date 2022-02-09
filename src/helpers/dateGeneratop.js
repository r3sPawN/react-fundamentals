const dateGenerator = () => {
	const today = new Date();
	return today.toLocaleString('en-US');
};

export default dateGenerator;
