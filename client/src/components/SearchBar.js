import React, { useState, useEffect } from "react";
import { search as searchApi, getRandomFood } from "../controllers/search";
import styled from "styled-components";

const SearchBar = ({ showSearchResults }) => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    setPlaceholder(getRandomFood());
  }, []);

  const handleSubmit = e => {
    const search = query || placeholder;
    searchApi(search, showSearchResults);
    e.preventDefault();
  };

  const SearchForm = styled.form`
    width: 60%;
    padding: 3%;
  `

  const SearchInput = styled.input`
    display: inline-block;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    width: 100%;
    border-bottom: #cfcfcf solid 1px;
    height: 40px;
    color: #f3f3f3;
    padding-left: 20px;
    font-size: 0.8em;
    letter-spacing: 0.05em;
    &:focus { 
      outline: none;
      border-bottom: #ffffff solid 2px;
    }
  `;

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
      />
    </SearchForm>
  );
};

export default SearchBar;
