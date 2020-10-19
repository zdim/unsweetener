import React, { useState, useEffect } from 'react';
import { getRandomFood } from '../controllers/search';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
	display: inline-block;
	background: transparent;
	border-top: none;
	border-left: none;
	border-right: none;
	box-sizing: border-box;
	width: 100%;
	border-bottom: #cfcfcf solid 1px;
	height: 2rem;
	color: #f3f3f3;
	padding-left: 0.5rem;
	font-size: 0.8em;
	&:focus {
		outline: none;
		border-bottom: #ffffff solid 1px;
	}
`;

export const Search = ({ type }) => {
	const [query, setQuery] = useState('');
	const [placeholder, setPlaceholder] = useState('');

	const history = useHistory();
	useEffect(() => {
		setPlaceholder(getRandomFood());
	}, []);

	const handleSubmit = (e) => {
		const search = query || placeholder;
		history.push(`/search?q=${encodeURIComponent(search)}`);
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder={placeholder}
			/>
		</form>
	);
};
