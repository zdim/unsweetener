import React from 'react';
import ReactModal from 'react-modal';

export const Modal = ({ isOpen, children }) => {
	return <ReactModal isOpen={isOpen}>{children}</ReactModal>;
};
