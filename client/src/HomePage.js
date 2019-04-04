import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import { Redirect } from 'react-router-dom';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: null
        };
    }

  showSearchResults = results => {
    this.setState( { items: results.results })
    console.log(results.results);
  }  

  render() {
    if(this.state.items !== null) {
        return <Redirect to={{
                            pathname: '/search',
                            state: { items: this.state.items }
                        }}
                />
    }

    return (
      <div className="App">
        <header>
            <div className="branding">
                <h3>unsweetener <span role="img" aria-label="Lollipop">🍭</span></h3>
            </div>
        </header>
        <div className="body">
            <h2>Find out which foods or drinks have sweeteners added!</h2>
            <SearchBar showSearchResults={this.showSearchResults}/>
        </div>
      </div>
    );
  }
}

export default SearchPage;