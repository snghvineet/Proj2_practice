import React from 'react';

const UserListItem = (props) => {
	return <li>{`${props.username} (${props.age} years old)`}</li>;
};

export default UserListItem;
