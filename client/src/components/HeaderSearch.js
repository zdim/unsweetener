import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import { Search } from './Search';

const HeaderBar = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 1rem;
`;

const SearchIcon = styled(Icon)`
	margin-right: 0.5rem;
`;

export const HeaderSearch = () => {
	return (
		<HeaderBar>
			<SearchIcon name='search-icon' color='#FFFFFF' size={16} />
			<Search type='header' />
		</HeaderBar>
	);
};
