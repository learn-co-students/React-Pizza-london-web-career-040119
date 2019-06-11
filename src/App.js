import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

import API from './services/api'

class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: { },
  }

  componentDidMount() {
    API.fetchPizzas()
      .then(pizzas => this.setState({pizzas}))
  }

  editClickHandler = (id) => {
    const selectedPizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({selectedPizza})
  }

  submitHandler = (pizza) => {
    console.log(pizza)
    this.setState({
      selectedPizza: {},
    })
  }

  changeHandler = (e, pizza) => {
    console.log(e)
    console.log(pizza)
    this.setState({
      selectedPizza: pizza
    })
  }
  
  render() {
    const {pizzas, selectedPizza} = this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={selectedPizza} submitHandler={this.submitHandler} changeHandler={this.changeHandler} />
        <PizzaList pizzas={pizzas} editClickHandler={this.editClickHandler}/>
      </Fragment>
    );
  }
}

export default App;
