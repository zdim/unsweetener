import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/user';
import { Modal } from './Modal';

const Button = styled.button`
	margin-right: 1.5rem;
	cursor: pointer;
	background: none;
	border: none;
`;

export const LogIn = () => {
	const { user, setUser } = React.useContext(UserContext);
	const [showModal, setShowModal] = React.useState(false);

	const onPress = () => {
		setShowModal(true);
	};

	return (
		<>
			<Button onClick={onPress}>
				<span role="img" aria-label="person">
					{!!user ? '👨‍💻' : '👤'}
				</span>
			</Button>
			{showModal ? (
				<Modal isOpen>
					<input />
				</Modal>
			) : null}
		</>
	);
};
