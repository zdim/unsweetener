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
    <div>
      <header>
        <div className="landing">
          <h3>unsweetener</h3>
          <LogoLink />
        </div>
      </header>
      <div className="body">
        <h2>Find out which foods or drinks have sweeteners added!</h2>
        <SearchBar showSearchResults={showSearchResults} />
      </div>
    </div>
  );
};

export default HomePage;
