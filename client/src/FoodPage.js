import React, { Component } from 'react';
import './App.css';

class FoodPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: '',
            id: 0
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
          const { ingredients } = ing;
          const sweeteners = [ 'SUGAR', 'ASPARTAME', 'SUCRALOSE', 'SACCHARIN', 'ACESULFAME K', 'XYLITOL', 'SORBITOL'];
          let foundSweeteners = '';
          sweeteners.forEach(element => {
              if(ingredients.includes(element)) {
                  foundSweeteners = foundSweeteners.concat(element)
              }
          });
          this.setState({ ingredients: foundSweeteners })
      }
  }

    getDescription = () => {
        const ingredients = this.state.ingredients;
        return ingredients ? `Contains ${ingredients}!` : `Does not contain sweeteners!`;
    }

    render() {
        return (
            <div className="App-header">
                <h1>{this.props.name}</h1>
                <h2>{this.getDescription()}</h2>
            </div>
        );
    }
}

export default FoodPage;