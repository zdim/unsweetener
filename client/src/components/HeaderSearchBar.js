import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getRandomFood, search as searchApi } from "../controllers/search";

const HeaderSearchBar = showSearchResults => {
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
    margin-left: 3%;
  `;

  const SearchInput = styled.input`
    display: inline-block;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    width: 60%;
    border-bottom: #999999 solid 1px;
    height: 30px;
    color: #999999;
    min-width: 200px;
    max-width: 400px;
    padding-left: 10px;
    &:hover { border-bottom: #fff solid 1px; }
    &:focus { outline: none; }
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

export default HeaderSearchBar;
