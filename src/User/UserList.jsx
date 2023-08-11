import React from 'react';
import UserListItem from './UserListItem';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
	return (
		<ul className={styles['custom-list']}>
			{users.map((user) => (
				<UserListItem
					key={user.username}
					username={user.username}
					age={user.age}
				/>
			))}
		</ul>
	);
};

export default UserList;
