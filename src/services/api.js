const URL = 'http://localhost:3000/pizzas';

const fetchPizzas = () => fetch(URL).then(resp => resp.json());

const fetchPizza = id => fetch(`${URL}/${id}`).then(resp => resp.json());

const patchPizza = (pizza) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pizza),
  };
  return fetch(`${URL}/${pizza.id}`, options).then(resp => resp.json());
};

export default { fetchPizzas, fetchPizza, patchPizza };
