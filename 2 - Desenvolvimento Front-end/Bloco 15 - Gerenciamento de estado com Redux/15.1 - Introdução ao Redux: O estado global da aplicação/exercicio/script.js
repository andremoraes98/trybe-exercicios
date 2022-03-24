const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = () => ({
  type: "NEXT_COLOR",
})

const previousColor = () => ({
  type: "PREVIOUS_COLOR",
})

const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.colors.length - 1 === state.index ? state.index : state.index + 1,
      }
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.index : state.index - 1,
      }
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

nextButton.addEventListener('click', store.dispatch(nextColor));
previousButton.addEventListener('click', previousColor);
console.log(store.getState());