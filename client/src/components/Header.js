import React from 'react';
import styled from 'styled-components';

export const Header = (props) => {
	const HeaderBar = styled.header`
		position: sticky;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #111111;
		color: #fff;
		border-bottom: darkgrey 1px solid;
	`;

	return <HeaderBar>{props.children}</HeaderBar>;
};
