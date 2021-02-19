import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = () => {
	const Branding = styled.div`
		display: flex;
		justify-content: center;
		margin: 1rem;
	`;

	const HeaderText = styled.h3`
		margin: 0;
		padding: 0 8px 0 2px;
	`;

	return (
		<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
			<Branding>
				<HeaderText>unsweetener</HeaderText>
				<HeaderText>
					<span role='img' aria-label='Lollipop'>
						🍭
					</span>
				</HeaderText>
			</Branding>
		</Link>
	);
};
