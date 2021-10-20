import React from 'react';
import '../styles/App.css';
import styled from 'styled-components';
import { SearchResults } from './SearchResults';
import { LogoLink } from './LogoLink';
import { Header } from './Header';
import { HeaderSearch } from './HeaderSearch';
import { search as searchApi } from '../controllers/search';

export const SearchPage = (props) => {
	const [query, setQuery] = React.useState(props.query);
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const param = new URLSearchParams(props.location.search);
		const encodedSearch = param.get('q');
		const search = decodeURIComponent(encodedSearch);
		setIsLoading(true);
		setQuery(search);
		searchApi(search)
			.then((results) => {
				setItems(results.results);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [props.location.search]);

	const SearchResultsTitle = styled.h2`
		margin: 3rem 0;
		font-weight: lighter;
		font-size: 2rem;
	`;

	return (
		<div className="App">
			<Header>
				<LogoLink />
				<HeaderSearch />
			</Header>
			<div className="body">
				<div>
					<SearchResultsTitle>
						results for{' '}
						<span
							style={{ fontWeight: 'lighter', color: '#84c3d6' }}
						>
							{query}
						</span>
					</SearchResultsTitle>
					<SearchResults items={items} isLoading={isLoading} />
				</div>
			</div>
		</div>
	);
};
