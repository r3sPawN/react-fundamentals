const registerService = async (newUser) => {
	const response = await fetch('http://localhost:3000/register', {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();
	return result;
};

const loginService = async (userData) => {
	const response = await fetch('http://localhost:3000/login', {
		method: 'POST',
		body: JSON.stringify(userData),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();
	return result;
};

export { registerService, loginService };
