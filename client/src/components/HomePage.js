import React from 'react'
import '../styles/App.css'
import styled from 'styled-components'
import { Search } from './Search'
import LogoLink from './LogoLink'
import Header from './Header'

const HomePage = () => {
	const Footer = styled.div`
		position: absolute;
		bottom: 0;
	`

	const FooterText = styled.p`
		color: #9c9c9c;
		font-size: 0.5em;
		letter-spacing: 0.1em;
	`

	const SearchBar = styled(Search)``

	return (
		<div className='App'>
			<Header>
				<LogoLink />
			</Header>
			<div className='body'>
				<h3>discover which foods and drinks have sweeteners added</h3>
				<SearchBar />
				<Footer>
					<FooterText>
						powered by the{' '}
						<span style={{ fontWeight: 'bold' }}>USDA</span> APIs
					</FooterText>
				</Footer>
			</div>
		</div>
	)
}

export default HomePage
