import React, { useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import LogoLink from "./LogoLink";
import Icon from "./Icon";

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
    props.history.replace('/search', { query: query, items: results.results });
  };

  return (
    <div className="App">
      <header>
        <div className="header-search">
            <Icon name="search-icon" color="#FFFFFF" size={16} />
            <SearchBar showSearchResults={showSearchResults} />
          </div>
          <LogoLink />
      </header>
      <div className="body">
        <div className="search-results">
          <h2>results for <span style={{ fontWeight: "lighter", color: "#84c3d6" }}>{query}</span></h2>
          <SearchResults items={items} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
