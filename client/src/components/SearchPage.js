import React from 'react'
import '../styles/App.css'
import styled from 'styled-components'
import SearchResults from './SearchResults'
import LogoLink from './LogoLink'
import Header from './Header'
import HeaderSearch from './HeaderSearch'
import { search as searchApi } from '../controllers/search'

const SearchPage = (props) => {
	const [query, setQuery] = React.useState(props.query)
	const [items, setItems] = React.useState([])

	React.useEffect(() => {
		const param = new URLSearchParams(props.location.search)
		const encodedSearch = param.get('q')
		const search = decodeURIComponent(encodedSearch)
		setQuery(search)
		searchApi(search).then((results) => {
			console.log(results)
			setItems(results.results)
		})
	}, [props.location.search])

	const SearchResultsTitle = styled.h2`
		margin: 40px 0;
		font-weight: lighter;
		font-size: 1.4em;
	`

	return (
		<div className='App'>
			<Header>
				<HeaderSearch />
				<LogoLink />
			</Header>
			<div className='body'>
				<div>
					<SearchResultsTitle>
						results for{' '}
						<span style={{ fontWeight: 'lighter', color: '#84c3d6' }}>
							{query}
						</span>
					</SearchResultsTitle>
					<SearchResults items={items} />
				</div>
			</div>
		</div>
	)
}

export default SearchPage
