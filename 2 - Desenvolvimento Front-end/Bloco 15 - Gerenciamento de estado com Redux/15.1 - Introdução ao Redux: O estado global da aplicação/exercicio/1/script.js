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

const randomColor = {
  type: "RANDOM_COLOR",
}

const createColor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const randomButton = document.querySelector('#random');

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
    case "RANDOM_COLOR":
      return {
        ...state,
        colors: action.colors,
        index: action.index,
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

const actionRandom = () => {
  const { colors } = store.getState();
  colors.push(createColor());
  const index = colors.length - 1;
  store.dispatch({ ...randomColor, colors, index })
}

nextButton.addEventListener('click', actionNext);
previousButton.addEventListener('click', actionPrevious);
randomButton.addEventListener('click', actionRandom);

store.subscribe( () => {
  const colorName = document.querySelector('#value');
  const bodyContainer = document.querySelector('#container');
  const { colors, index } = store.getState();
  colorName.innerHTML = colors[index];
  bodyContainer.style = `background-color: ${colors[index]}`
})