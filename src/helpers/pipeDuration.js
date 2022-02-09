const pipeDuration = (minutes) => {
	if (!Number(minutes)) {
		return 'Plese enter valid time in minutes';
	}

	const hours = Math.floor(minutes / 60);
	const min = Math.floor(minutes % 60);
	const hh = hours < 10 ? `0${hours}` : hours;
	const mm = min < 10 ? `0${min}` : min;
	return `${hh}:${mm} hours`;
};

export default pipeDuration;
