import React, { useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import LogoLink from "./LogoLink";

const SearchPage = props => {
  const [query, setQuery] = useState(
    props.location.state ? props.location.state.query : ""
  );
  const [items, setItems] = useState(
    props.location.state ? props.location.state.items : []
  );

  const showSearchResults = (results, query) => {
    setItems(results.results);
    setQuery(query);
  };

  return (
    <div className="App">
      <header>
        <div className="branding">
          <LogoLink />
          <SearchBar showSearchResults={showSearchResults} />
        </div>
      </header>
      <div className="body">
        <h2>Results for "{query}"</h2>
        <SearchResults items={items} />
      </div>
    </div>
  );
};

export default SearchPage;
