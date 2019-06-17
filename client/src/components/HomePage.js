import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../styles/App.css";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import LogoLink from "./LogoLink";
import Header from "./Header";

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

  const Footer = styled.div`
    position: absolute;
    bottom: 0;
  `;

  const FooterText = styled.p`
    color: #9c9c9c;
    font-size: 0.5em;
    letter-spacing: 0.1em;
  `;

  return (
    <div className="App">
      <Header>
        <LogoLink />
      </Header>
      <div className="body">
        <h3>discover which foods and drinks have sweeteners added</h3>
        <SearchBar showSearchResults={showSearchResults} />
        <Footer>
          <FooterText>
            powered by the <span style={{ fontWeight: "bold" }}>USDA</span> APIs
          </FooterText>
        </Footer>
      </div>
    </div>
  );
};

export default HomePage;
