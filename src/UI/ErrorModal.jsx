import React from 'react';
import Card from './Card';
import styles from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = ({ errMsg, ...props }) => {
	return (
		<div className={styles['error-bg']}>
			<Card className={styles['error']}>
				<div className={styles['error-header']}>Inavlid input</div>
				<div className={styles['error-body']}>
					<p>{errMsg}</p>
					<div style={{ display: 'flex' }}>
						<div className='fill-row' />
						<Button onClick={props.clearModal}>Okay</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ErrorModal;
