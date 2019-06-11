const URL = 'http://localhost:3000/pizzas';

const fetchPizzas = () => {
  return fetch(URL).then(resp => resp.json());
};

export default { fetchPizzas };
