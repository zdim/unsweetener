import React from 'react';
import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, .5)';

ReactModal.defaultStyles.content = {
	...ReactModal.defaultStyles.content,
	backgroundColor: 'rgba(0, 0, 0)',
	border: 'none',
	inset: 100,
	maxWidth: 400,
	margin: '0 auto',
};

export const Modal = ({ isOpen, onRequestClose, children }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			shouldCloseOnEsc
			shouldCloseOnOverlayClick
			onRequestClose={onRequestClose}
		>
			{children}
		</ReactModal>
	);
};
