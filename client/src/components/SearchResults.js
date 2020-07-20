import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';

const List = styled.ul`
	font-size: 0.8em;
	text-transform: capitalize;
`;

const ListItem = styled.li`
	list-style-type: none;
	text-align: left;
	background: #151b20;
	border-left: 2px solid #212a31;
	border-right: 2px solid #212a31;
	padding: 10px;
	&:nth-child(odd) {
		background: #212a31;
		border: none;
	}
	&:last-child {
		border-bottom: 2px solid #212a31;
	}
`;

const ListLink = styled(Link)`
	text-decoration: none;
	color: lightblue;
	&:visited {
		color: lightblue;
	}
	&:hover {
		color: #fff;
	}
`;

const SearchResults = (props) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!props.items) {
			setItems([]);
		} else if (props.items.length === 0) {
			setItems(['No results found!']);
		} else {
			const searchResults = props.items.map((i) => (
				<ListItem key={i.id}>
					<ListLink
						to={{
							pathname: '/item/' + i.id,
							state: i,
						}}
					>
						{i.name.toLowerCase()}
					</ListLink>
				</ListItem>
			));

			setItems(searchResults);
		}
		setIsLoading(false);
	}, [props.items]);

	return isLoading ? (
		<Loader />
	) : items.length > 0 ? (
		<List>{items}</List>
	) : null;
};

export default SearchResults;
