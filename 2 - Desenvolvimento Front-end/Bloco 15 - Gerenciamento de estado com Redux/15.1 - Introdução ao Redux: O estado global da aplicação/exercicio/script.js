const Redux = require('redux');
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const reducer = (state = ESTADO_INICIAL) => {
  switch (true) {
    default:
      return state;
  }
}
const store = Redux.createStore(reducer);
console.log(store.getState());