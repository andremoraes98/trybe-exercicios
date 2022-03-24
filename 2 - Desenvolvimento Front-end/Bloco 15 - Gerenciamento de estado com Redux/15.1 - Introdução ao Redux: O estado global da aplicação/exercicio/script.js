const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = {
  type: "NEXT_COLOR",
}

const previousColor = {
  type: "PREVIOUS_COLOR",
}

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

const actionNext = () => {
  store.dispatch(nextColor)
}

const actionPrevious = () => {
  store.dispatch(previousColor)
}

nextButton.addEventListener('click', actionNext);
previousButton.addEventListener('click', actionPrevious);

store.subscribe( () => {
  const { colors, index} = store.getState();
  const colorName = document.querySelector('#value');
  const bodyContainer = document.querySelector('#container');
  colorName.innerHTML = colors[index];
  bodyContainer.style = `background-color: ${colors[index]}`
})