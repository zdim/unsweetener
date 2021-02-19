import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';

const List = styled.ul`
	font-size: 1rem;
	margin: 0;
	padding: 2rem;
	text-transform: capitalize;
`;

const ListItem = styled.li`
	list-style-type: none;
	text-align: left;
	background: #151b20;
	padding: 10px;
	&:nth-child(odd) {
		background: #212a31;
		border: none;
	}
`;

const ListLink = styled(Link)`
	text-decoration: none;
	text-transform: lowercase;
	color: lightblue;
	line-height: 133%;
	&:visited {
		color: lightblue;
	}
	&:hover {
		color: #fff;
	}
`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5rem;
`;

export const SearchResults = ({ items, isLoading }) => {
	const results = React.useMemo(() => {
		if (!items || !items.length) return [];

		return items.map((item) => (
			<ListItem key={`${item.name}-${item.id}`}>
				<ListLink to={{ pathname: '/item/' + item.id, state: item }}>
					{item.name}
				</ListLink>
			</ListItem>
		));
	}, [items]);

	return isLoading ? (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	) : items?.length > 0 ? (
		<List>{results}</List>
	) : (
		'No results found!'
	);
};
