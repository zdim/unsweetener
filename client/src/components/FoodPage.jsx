import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/App.css';
import styled from 'styled-components';
import { UserContext } from '../context/user';
import { LogoLink } from './LogoLink';
import { Loader } from './Loader';
import { Header } from './Header';
import { BackToSearch } from './BackToSearch';
import { HeaderSearch } from './HeaderSearch';
import { EditFoodModal } from './EditFoodModal';

const FoodName = styled.h1`
	margin-top: 0;
	margin-bottom: 4rem;
	font-size: 1.8em;
	opacity: .9;
`;

const BrandName = styled.p`
	opacity: .65;
	font-weight: bold;
	font-size: .9rem;
`

const Ingredients = styled.h2`
	font-size: 1.4em;
	font-weight: lighter;
`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 8rem;
`;

export const FoodPage = (props) => {
	const { user } = React.useContext(UserContext);
	const [isLoading, setIsLoading] = useState(true);
	const [ingredients, setIngredients] = useState('');
	const [name, setName] = useState('');
	const [brand, setBrand] = useState(null);
	const [items, setItems] = useState(null);
	const [query, setQuery] = useState('');
	const [isEditing, setIsEditing] = useState(false);

	const checkIngredients = (ing) => {
		if (ing) {
			if (ing.error) {
				setName('No item found!');
				return;
			}
			const { ingredients, name, brand } = ing;
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
				if (ingredients.toUpperCase().includes(element)) {
					foundSweeteners = foundSweeteners.concat(element + ', ');
				}
			});
			setIngredients(
				foundSweeteners.length > 0
					? foundSweeteners
							.slice(0, foundSweeteners.length - 2)
							.toLowerCase()
					: foundSweeteners
			);
			setName(name.toLowerCase());
			setBrand(brand);
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
	}, [props.match.params]);

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
			<div className="App">
				<Header>
					<LogoLink />
					<HeaderSearch showSearchResults={showSearchResults} />
				</Header>
				<div className="body">
					{isLoading ? (
						<LoaderContainer>
							<Loader />
						</LoaderContainer>
					) : (
						<>
							<BackToSearch history={props.history} />
							<div style={{ margin: '3rem 0 0 0' }}>
								<BrandName>{brand}</BrandName>
								<FoodName>{name}</FoodName>
								<Ingredients>{getDescription()}</Ingredients>
							</div>
							{!!user && (
								<button onClick={() => setIsEditing(true)}>
									REQUEST AN EDIT
								</button>
							)}
						</>
					)}
					{isEditing && (
						<EditFoodModal
							onRequestClose={() => setIsEditing(false)}
							id={props.match.params.id}
							foodName={name}
							foodBrand={brand}
						/>
					)}
				</div>
			</div>
		);
	}
};
