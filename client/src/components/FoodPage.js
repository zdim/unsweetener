import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import LogoLink from "./LogoLink";
import Loader from "./Loader";
import BackToSearch from "./BackToSearch";
import Icon from "./Icon";

const FoodPage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState("");
  const [name, setName] = useState("");
  const [items, setItems] = useState(null);
  const [query, setQuery] = useState('');

  const checkIngredients = ing => {
    if (ing) {
      if (ing.error) {
        setName("No item found!");
        return;
      }
      const { ingredients, name } = ing;
      const sweeteners = [
        "SUGAR",
        "ASPARTAME",
        "SUCRALOSE",
        "SACCHARIN",
        "ACESULFAME K",
        "XYLITOL",
        "SORBITOL"
      ];
      let foundSweeteners = "";
      sweeteners.forEach(element => {
        if (ingredients.includes(element)) {
          foundSweeteners = foundSweeteners.concat(element + ", ");
        }
      });
      setIngredients(
        foundSweeteners.length > 0
          ? foundSweeteners.slice(0, foundSweeteners.length - 2).toLowerCase()
          : foundSweeteners
      );
      setName(name.toLowerCase());
      setIsLoading(false);
    }
  };

  const getDescription = () => {
    return ingredients
      ? `contains ${ingredients}`
      : 'does not contain sweeteners';
  };

  const showSearchResults = (results, query) => {
    setQuery(query);
    setItems(results.results);
  };

  useEffect(() => {
    const { id } = props.match.params;
    const url = `/.netlify/functions/app/item/${id}`;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(x => x.json())
      .then(x => checkIngredients(x));
  });

  if (items) {
    return (
      <Redirect push
        to={{
          pathname: "/search",
          state: { items: items, query: query }
        }}
      />
    );
  } else {
    return (
      <div className="App">
        <header>
          <div className="header-search">
            <Icon name="search-icon" color="#999999" size={16} />
            <SearchBar showSearchResults={showSearchResults} />
          </div>
          <LogoLink />
      </header>
        {isLoading ? (
          <div className="body">
            <Loader />
          </div>
        ) : (
          <div className="body">
            <BackToSearch history={props.history} />
            <div className="ingredients">
              <h1>{name}</h1>
              <h2>{getDescription()}</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default FoodPage;
