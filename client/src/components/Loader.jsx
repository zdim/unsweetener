import React from 'react';
import styled, { keyframes } from 'styled-components';
import '../styles/App.css';

export const Loader = () => {
	const spin = keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    `;

	const Spinner = styled.div`
		border: 2px solid #646464;
		border-radius: 50%;
		border-top: 2px solid #3498db;
		width: 180px;
		height: 180px;
		-webkit-animation: ${spin} 2s linear infinite; /* Safari */
		animation: ${spin} 2s linear infinite;
	`;

	return <Spinner />;
};
