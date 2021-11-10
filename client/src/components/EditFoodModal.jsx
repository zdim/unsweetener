import React from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';

const FieldLabel = styled.label`
	font-size: 1rem;
	color: white;
`;

export const EditFoodModal = ({ onRequestClose, foodName, foodBrand, id }) => {
	const [name, setName] = React.useState(foodName ?? '');
	const [brand, setBrand] = React.useState(foodBrand ?? '');

	const onNameChange = (value) => {
		if (value && value.target.value) {
			setName(value.target.value);
		}
	};

	const onBrandChange = (value) => {
		if (value && value.target.value) {
			setBrand(value.target.value);
		}
	};

	const onSave = () => {
		const url = `/.netlify/functions/app/item/${id}`;
		fetch(url, {
			method: 'PATCH',
			body: JSON.stringify({ name, brand }),
			headers: { 'Content-Type': 'application/json' },
		}).catch(console.error);
	};

	return (
		<Modal isOpen onRequestClose={onRequestClose}>
			<div>
				<FieldLabel>Name: </FieldLabel>
				<input
					defaultValue={foodName ?? ''}
					value={name}
					onChange={onNameChange}
				/>
			</div>
			<div>
				<FieldLabel>Brand: </FieldLabel>
				<input
					defaultValue={foodBrand ?? ''}
					value={brand}
					onChange={onBrandChange}
				/>
			</div>
			<button onClick={onSave}>Save</button>
			<button onClick={onRequestClose}>Cancel</button>
		</Modal>
	);
};
