import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';

const List = styled.ul`
	font-size: 1rem;
	margin: 0;
	padding: 0 2rem 2rem 2rem;
	text-transform: capitalize;
`;

const ListItem = styled.li`
	list-style-type: none;
	text-align: left;
	background: #151b20;
	padding: 10px;
	border-radius: 4px;
	&:nth-child(odd) {
		background: rgba(255, 255, 255, 0.025);
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

const Brand = styled.p`
	text-transform: uppercase;
	font-size: 0.6rem;
	margin: 0.1rem 0 0 0;
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
				<Brand>{item.brand}</Brand>
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
