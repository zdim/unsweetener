import React, { useState } from "react";
import "../styles/App.css";
import styled from "styled-components";
import SearchResults from "./SearchResults";
import LogoLink from "./LogoLink";
import Header from "./Header";
import HeaderSearch from "./HeaderSearch";

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
    props.history.replace("/search", { query: query, items: results.results });
  };

  const SearchResultsTitle = styled.h2`
    margin: 40px 0;
    font-weight: lighter;
    font-size: 1.4em;
  `;

  return (
    <div className="App">
      <Header>
        <HeaderSearch showSearchResults={showSearchResults} />
        <LogoLink />
      </Header>
      <div className="body">
        <div>
          <SearchResultsTitle>
            results for{" "}
            <span style={{ fontWeight: "lighter", color: "#84c3d6" }}>
              {query}
            </span>
          </SearchResultsTitle>
          <SearchResults items={items} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
