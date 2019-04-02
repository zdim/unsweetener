import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SearchPage from './SearchPage';
import FoodPage from './FoodPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={SearchPage} />
        <Route path='/:id' component={FoodPage} />
      </Router>
    );
  }
}

export default App;
