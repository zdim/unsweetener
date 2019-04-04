import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const SearchResults = (props) => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        if(!props.items) {
            setItems([]);
        } else {
            const searchResults = props.items.map(i => (
                <li key={i.id}>
                    <Link 
                        to={{
                            pathname: '/item/' + i.id,
                            state: i
                            }}>
                        {i.name}
                    </Link>
                </li>
            ));

            setItems(searchResults);
        }
    })

    return (items && items.length > 0 ? <ul>{items}</ul> : null);
}

export default SearchResults