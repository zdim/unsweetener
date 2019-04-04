import React, { useState } from 'react';

const SearchBar = (props) => {

    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        const search = query + ' upc';
        const url = 'http://localhost:5000/search';
        fetch(url, { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ search: search })
        }).then(x => x.json())
        .then(x => props.showSearchResults(x));
        e.preventDefault();
      }

      return (
        <form onSubmit={handleSubmit}>            
            <input className="searchbar"
                type="text"
                onChange={ e => setQuery(e.target.value)}
                placeholder="Search..."
            />
        </form>
      );   
}

export default SearchBar;