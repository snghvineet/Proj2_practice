import React, { useState } from 'react';
import styles from './AddUserForm.module.css';
import Button from '../UI/Button';

const AddUserForm = (props) => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const usernameChangeHandler = (e) => {
		setUsername(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setAge(e.target.value);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		const userData = {
			id: Math.random().toString(),
			username: username,
			age: +age,
		};
		console.log(userData);
		props.onAddUser(userData);
	};

	return (
		<form onSubmit={onSubmitForm}>
			<div>
				<p className={styles['input-element']}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						value={username}
						onChange={usernameChangeHandler}
						id='username'
					/>
				</p>
				<p className={styles['input-element']}>
					<label htmlFor='age-years'>Age (years)</label>
					<input
						type='number'
						id='age-years'
						value={age}
						onChange={ageChangeHandler}
					/>
				</p>
			</div>
			<div>
				<Button>Add User</Button>
			</div>
		</form>
	);
};

export default AddUserForm;
