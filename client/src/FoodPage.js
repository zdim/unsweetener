import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import LogoLink from './LogoLink';

class FoodPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: '',
            name: ''
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const url = `http://localhost:5000/item/${id}`;
        fetch(url, { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
        }).then(x => x.json())
            .then(x => this.checkIngredients(x));
  }

    checkIngredients = (ing) => {
        if(ing) {
            if(ing.error) {
                this.setState( { name: "No item found!" });
                return;
            }
        const { ingredients, name } = ing;
        const sweeteners = [ 'SUGAR', 'ASPARTAME', 'SUCRALOSE', 'SACCHARIN', 'ACESULFAME K', 'XYLITOL', 'SORBITOL'];
        let foundSweeteners = '';
        sweeteners.forEach(element => {
            if(ingredients.includes(element)) {
                foundSweeteners = foundSweeteners.concat(element + ', ')
            }
        });
        this.setState({ 
            ingredients: foundSweeteners.length > 0 ? foundSweeteners.slice(0, foundSweeteners.length - 2) : foundSweeteners,
            name: name 
        })
        }
  }

    getDescription = () => {
        const ingredients = this.state.ingredients;
        return ingredients ? `Contains ${ingredients}!` : `Does not contain sweeteners!`;
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
                    <h1>{this.state.name}</h1>
                    <h2>{this.getDescription()}</h2>
                </div>
            </div>
        );
    }
}

export default FoodPage;