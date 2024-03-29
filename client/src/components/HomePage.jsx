import React from 'react';
import '../styles/App.css';
import styled from 'styled-components';
import { Search } from './Search';
import { LogoLink } from './LogoLink';
import { Header } from './Header';
import { LogIn } from './LogIn';

const Footer = styled.div`
	position: absolute;
	bottom: 0;
`;

const FooterText = styled.p`
	color: #9c9c9c;
	font-size: 0.6rem;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: auto;
	align-items: center;
	justify-content: center;
`;

const HeaderText = styled.h3`
	margin-top: 0;
	margin-bottom: 3rem;
	padding: 0 1rem;
	line-height: 166%;
	color: #fff;
`;

export const HomePage = () => {
	const SearchBar = React.useMemo(() => {
		return styled(Search)`
			margin-top: 3rem;
			margin-bottom: 3rem;
			width: 50%;
		`;
	}, []);

	return (
		<div className="App">
			<Header>
				<LogoLink />
				<LogIn />
			</Header>
			<Container>
				<HeaderText>
					discover which foods and drinks have sweeteners added
				</HeaderText>
				<SearchBar type="main" />
				<Footer>
					<FooterText>data sourced from the USDA</FooterText>
				</Footer>
			</Container>
		</div>
	);
};
