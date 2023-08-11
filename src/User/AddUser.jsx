import React from 'react';
import AddUserForm from './AddUserForm';
import Card from '../UI/Card';

const AddUser = (props) => {
	const onAddUser = (user) => {
		props.addUser(user);
	};
	return (
		<Card>
			<AddUserForm onAddUser={onAddUser} />
		</Card>
	);
};

export default AddUser;
