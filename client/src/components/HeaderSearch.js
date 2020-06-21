import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { Search } from './Search'

const HeaderSearch = () => {
	const HeaderBar = styled.div`
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 20px;
	`

	const HeaderSearchBar = styled(Search)``

	return (
		<HeaderBar>
			<Icon name='search-icon' color='#FFFFFF' size={16} />
			<HeaderSearchBar />
		</HeaderBar>
	)
}

export default HeaderSearch
