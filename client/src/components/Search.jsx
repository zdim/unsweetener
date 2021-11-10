import React from 'react';
import { getRandomFood } from '../controllers/search';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const Search = ({ type, className }) => {
	const Input = React.useMemo(() => {
		const isHeader = type === 'header';
		return styled.input`
			display: inline-block;
			background: transparent;
			border-top: none;
			border-left: none;
			border-right: none;
			width: 100%;
			border-bottom: ${isHeader ? 'none' : '#cfcfcf solid 1px'};
			color: #f3f3f3;
			padding: 0.5rem;
			font-size: ${isHeader ? '.8rem' : '1rem'};
			font-family: inherit;
			&:focus {
				outline: none;
				border-bottom: ${isHeader ? 'none' : '#ffffff solid 1px'};
			}
		`;
	}, [type]);

	const [query, setQuery] = React.useState('');
	const placeholder = React.useMemo(() => getRandomFood(), []);

	const history = useHistory();

	const handleSubmit = (e) => {
		const search = query || placeholder;
		history.push(`/search?q=${encodeURIComponent(search)}`);
		e.preventDefault();
	};

	return (
		<form className={className} onSubmit={handleSubmit}>
			<Input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder={placeholder}
			/>
		</form>
	);
};
