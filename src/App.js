import React, { useState } from 'react';
import AddUser from './User/AddUser';
import UserList from './User/UserList';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';

function App() {
	const [users, setUsers] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');
	const clearErrorModal = () => {
		setErrorMsg('');
	};
	const validateUser = (user) => {
		if (user.username.trim().length < 5)
			return 'Username must be atleast 5 characters long.';
		if (user.age < 13)
			return 'The minimum age of the user should be atleast 13.';
		return null;
	};
	const addUser = (user) => {
		const errMsg = validateUser(user);
		if (errMsg) setErrorMsg(errMsg);
		else setUsers((prevState) => [...prevState, user]);
	};
	return (
		<div>
			{errorMsg.length > 0 && (
				<ErrorModal errMsg={errorMsg} clearModal={clearErrorModal} />
			)}
			<AddUser addUser={addUser} />
			<Card>
				{users.length === 0 ? (
					<p className='no-users-placeholder'>No users available yet</p>
				) : (
					<UserList users={users} />
				)}
			</Card>
		</div>
	);
}

export default App;
