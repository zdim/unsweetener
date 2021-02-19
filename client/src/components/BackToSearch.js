import React from 'react';
import styled from 'styled-components';

export const BackToSearch = ({ history }) => {
	const BackButton = styled.button`
		margin-top: 6rem;
		border: none;
		background-color: inherit;
		font-size: 0.8rem;
		cursor: pointer;
		color: #75a2c2;
		&:hover {
			color: #fff;
		}
	`;

	return (
		<div>
			<BackButton onClick={history.goBack}>back to search results</BackButton>
		</div>
	);
};
