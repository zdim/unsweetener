import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { SearchPage } from './components/SearchPage';
import { FoodPage } from './components/FoodPage';
import { UserProvider } from './context/user';

export const App = () => (
	<UserProvider>
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/search" component={SearchPage} />
				<Route path="/item/:id" component={FoodPage} />
			</Switch>
		</Router>
	</UserProvider>
);
