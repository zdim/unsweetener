import React from 'react';
import { getRandomFood } from '../controllers/search';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const Search = ({ type, className }) => {
	const Input = React.useMemo(() => {
		return styled.input`
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
			padding-left: 1rem;
			font-size: ${type === 'header' ? '.8rem' : '1rem'};
			font-family: inherit;
			&:focus {
				outline: none;
				border-bottom: #ffffff solid 1px;
			}
		`;
	}, []);

	const [query, setQuery] = React.useState('');
	const [placeholder, setPlaceholder] = React.useState('');

	const history = useHistory();

	React.useEffect(() => {
		setPlaceholder(getRandomFood());
	}, []);

	const handleSubmit = (e) => {
		const search = query || placeholder;
		history.push(`/search?q=${encodeURIComponent(search)}`);
		e.preventDefault();
	};

	return (
		<form className={className} onSubmit={handleSubmit}>
			<Input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder={placeholder}
			/>
		</form>
	);
};
