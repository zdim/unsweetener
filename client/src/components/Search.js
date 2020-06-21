import React, { useState, useEffect } from 'react'
import { getRandomFood } from '../controllers/search'
import { useHistory } from 'react-router-dom'

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
