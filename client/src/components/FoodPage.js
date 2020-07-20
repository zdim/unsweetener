import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/App.css';
import styled from 'styled-components';
import LogoLink from './LogoLink';
import Loader from './Loader';
import Header from './Header';
import BackToSearch from './BackToSearch';
import HeaderSearch from './HeaderSearch';

const FoodPage = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [ingredients, setIngredients] = useState('');
	const [name, setName] = useState('');
	const [items, setItems] = useState(null);
	const [query, setQuery] = useState('');

	const checkIngredients = (ing) => {
		if (ing) {
			if (ing.error) {
				setName('No item found!');
				return;
			}
			const { ingredients, name } = ing;
			const sweeteners = [
				'SUGAR',
				'ASPARTAME',
				'SUCRALOSE',
				'SACCHARIN',
				'ACESULFAME K',
				'XYLITOL',
				'SORBITOL',
				'HIGH FRUCTOSE CORN SYRUP',
			];
			let foundSweeteners = '';
			sweeteners.forEach((element) => {
				if (ingredients.includes(element)) {
					foundSweeteners = foundSweeteners.concat(element + ', ');
				}
			});
			setIngredients(
				foundSweeteners.length > 0
					? foundSweeteners.slice(0, foundSweeteners.length - 2).toLowerCase()
					: foundSweeteners
			);
			setName(name.toLowerCase());
			setIsLoading(false);
		}
	};

	const getDescription = () => {
		return ingredients
			? `contain${name.endsWith('s') ? '' : `s`} ${ingredients}`
			: 'does not contain sweeteners';
	};

	const showSearchResults = (results, query) => {
		setQuery(query);
		setItems(results.results);
	};

	useEffect(() => {
		const { id } = props.match.params;
		const url = `/.netlify/functions/app/item/${id}`;
		fetch(url, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((x) => x.json())
			.then((x) => checkIngredients(x));
	});

	const FoodName = styled.h1`
		margin-bottom: 10%;
		font-size: 1.8em;
	`;

	const Ingredients = styled.h2`
		font-size: 1.4em;
		font-weight: lighter;
	`;

	if (items) {
		return (
			<Redirect
				push
				to={{
					pathname: '/search',
					state: { items: items, query: query },
				}}
			/>
		);
	} else {
		return (
			<div className='App'>
				<Header>
					<HeaderSearch showSearchResults={showSearchResults} />
					<LogoLink />
				</Header>
				{isLoading ? (
					<div className='body'>
						<Loader />
					</div>
				) : (
					<div className='body'>
						<BackToSearch history={props.history} />
						<div style={{ margin: '10%' }}>
							<FoodName>{name}</FoodName>
							<Ingredients>{getDescription()}</Ingredients>
						</div>
					</div>
				)}
			</div>
		);
	}
};

export default FoodPage;
