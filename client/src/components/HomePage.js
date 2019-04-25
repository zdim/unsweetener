import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import LogoLink from "./LogoLink";

const HomePage = () => {
  const [items, setItems] = useState(undefined);
  const [query, setQuery] = useState("");

  const showSearchResults = (results, query) => {
    setQuery(query);
    setItems(results.results);
  };

  if (items) {
    return (
      <Redirect
        to={{
          pathname: "/search",
          state: { items: items, query: query }
        }}
      />
    );
  }

  return (
    <div className="App">
      <header className="landing">
        <LogoLink />
      </header>
      <div className="body">
        <h3>discover which foods and drinks have sweeteners added</h3>
        <SearchBar showSearchResults={showSearchResults} />
        <div className="usda-tag">
          <p>powered by the <span style={{ fontWeight: "bold" }}>USDA</span> APIs</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
