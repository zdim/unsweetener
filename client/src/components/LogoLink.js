import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = () => {
	const Branding = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem;
	`;

	const HeaderText = styled.h3`
		margin: 0;
		padding: 0 8px 0 2px;
	`;

	const Icon = styled.span`
		padding-left: 0.5rem;
	`;

	return (
		<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
			<Branding>
				<HeaderText>
					unsweetener
					<Icon>
						<span role="img" aria-label="Lollipop">
							🍭
						</span>
					</Icon>
				</HeaderText>
			</Branding>
		</Link>
	);
};
