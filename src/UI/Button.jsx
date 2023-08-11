import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type, onClick, ...props }) => {
	return (
		<button onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default Button;
