import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

const App = () => {
	const [mockedData, setMockedData] = useState(mockedCoursesList);
	const [mockedAuhtor, setMockedAuthors] = useState(mockedAuthorsList);

	return (
		<div className='app-ctr'>
			<Header />
			<div className='courses-ctr'>
				<Routes>
					<Route path='registration' element={<Registration />} />
					<Route path='login' element={<Login />} />
					<Route
						path='courses'
						element={
							<Courses courseData={mockedData} changeData={setMockedData} />
						}
					/>
					<Route
						path='courseinfo/:id'
						element={<CourseInfo coursesData={mockedData} />}
					/>
					<Route
						path='courses/add'
						element={
							<CreateCourse
								courseData={mockedData}
								changeData={setMockedData}
								changeAuthor={setMockedAuthors}
								stateOfAuthors={mockedAuhtor}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
