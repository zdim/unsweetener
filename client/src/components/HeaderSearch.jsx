import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import { Search } from './Search';

const HeaderBar = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 1rem;
	background: rgba(255, 255, 255, 0.06);
	border-radius: 6px;
	padding: 0 0.5rem;
`;

const SearchIcon = styled(Icon)``;

const SearchBar = styled(Search)`
	border: none !important;
`;

export const HeaderSearch = () => {
	return (
		<HeaderBar>
			<SearchIcon name="search-icon" color="#c3c3c3" size={16} />
			<SearchBar type="header" />
		</HeaderBar>
	);
};
