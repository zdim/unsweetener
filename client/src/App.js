import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import FoodPage from './FoodPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/item/:id' component={FoodPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
