import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/user';
import { Modal } from './Modal';

const Button = styled.button`
	margin-right: 1.5rem;
	cursor: pointer;
	background: none;
	border: none;
	&:focus {
		outline: none;
	}
`;

export const LogIn = () => {
	const { user, setUser } = React.useContext(UserContext);
	const [showModal, setShowModal] = React.useState(false);
	const [username, setUsername] = React.useState('');

	const onPress = () => {
		setShowModal(true);
	};

	const onChangeUsername = (value) => {
		if (value) {
			const typedValue = value.target.value;
			if (typedValue === 'I am the admin now') {
				setUser('admin');
				setShowModal(false);
			}
			setUsername(typedValue);
		}
	};

	return (
		<>
			<Button onClick={onPress}>
				<span role="img" aria-label="person">
					{!!user ? '👨‍💻' : '👤'}
				</span>
			</Button>
			{showModal ? (
				<Modal isOpen onRequestClose={() => setShowModal(false)}>
					<input
						autoFocus
						onChange={onChangeUsername}
						value={username}
					/>
				</Modal>
			) : null}
		</>
	);
};
