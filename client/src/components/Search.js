import React, { useState, useEffect } from 'react'
import { getRandomFood } from '../controllers/search'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export const Search = () => {
	const [query, setQuery] = useState('')
	const [placeholder, setPlaceholder] = useState('')

	const history = useHistory()

	useEffect(() => {
		setPlaceholder(getRandomFood())
	}, [])

	const handleSubmit = (e) => {
		const search = query || placeholder
		history.push(`/search?q=${encodeURIComponent(search)}`)
		e.preventDefault()
	}

	const Form = styled.form``

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				onChange={(e) => setQuery(e.target.value)}
				placeholder={placeholder}
			/>
		</form>
	)
}
