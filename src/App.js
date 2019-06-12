import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';

import API from './services/api';

const initialSelectedPizza = {
  id: null,
  topping: '',
  size: 'Medium',
  vegetarian: false
}

class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: initialSelectedPizza
  };

  componentDidMount() {
    API.fetchPizzas().then(pizzas => this.setState({ pizzas }));
  }

  editClickHandler = id => {
    const selectedPizza = this.state.pizzas.find(pizza => pizza.id === id);
    this.setState({ selectedPizza });
  };

  changeHandler = e => {
    const newSelectedPizza = {
      ...this.state.selectedPizza
    };

    if (e.target.name === 'vegetarian') {
      newSelectedPizza.vegetarian =
        e.target.value === 'Vegetarian' ? true : false;
    } else {
      newSelectedPizza[e.target.name] = e.target.value;
    }

    this.setState({ selectedPizza: newSelectedPizza });
  };

  submitHandler = () => {
    const { selectedPizza } = this.state;
    if (selectedPizza.id === null) return;

    API.patchPizza(selectedPizza)
      .then(patchedPizza => {
        this.setState(prevState => {
          
          const newPizzas = prevState.pizzas.map(pizza => {
            if (pizza.id === patchedPizza.id) {
              return patchedPizza
            } else {
              return pizza
            }
          })

          return {
            pizzas: newPizzas,
            selectedPizza: initialSelectedPizza
          }
        })
      }
      )
  }



  render() {
    const { pizzas, selectedPizza } = this.state;
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={selectedPizza}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
        <PizzaList pizzas={pizzas} editClickHandler={this.editClickHandler} />
      </Fragment>
    );
  }
}

export default App;
