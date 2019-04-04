import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import LogoLink from './LogoLink';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [ ]
    };
}

  showSearchResults = results => {
    this.setState( { items: results.results });
    console.log('SEARCH PAGE: ' + results);
  }  
  
  render() {
    return (
      <div className="App">
        <header>
            <div className="branding">
              <LogoLink />
            </div>
            <SearchBar showSearchResults={this.showSearchResults} />
        </header>
        <div className="body">
          <SearchResults items={this.props.location.state.items} />
        </div>
      </div>
    );
  }
}

export default SearchPage;