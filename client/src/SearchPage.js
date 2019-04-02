import React, { Component } from 'react';
import './App.css';
import './Suggestions';
import Suggestions from './Suggestions';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: '',
      items: [ ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
}

  showSearchResults = results => {
    this.setState( { items: results.results })
  }

  handleSubmit = e => {
    const query = this.state.search + ' upc';
    const url = 'http://localhost:5000/search';
    fetch(url, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ search: query })
    }).then(x => x.json())
    .then(x => this.showSearchResults(x));
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Find out which foods or drinks have sweeteners added!</h2>
          <form onSubmit={this.handleSubmit}>            
            <input className="searchbar"
              type="text"
              onChange={ e => this.setState({ search: e.target.value })}
              placeholder="Search..."
              />
            <Suggestions items={this.state.items} />
          </form>
        </header>
      </div>
    );
  }
}

export default SearchPage;
