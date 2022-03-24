const Redux = require('redux');

const loginIn = (email) => ({
  type: "LOGIN",
  email,
});

const INITIAL_STATE = {
  login: false,
  email: '',
}


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: 
      return state;
  };
};

const store = Redux.createStore(reducer);

store.dispatch(loginIn('andre.moraes.98@gmail.com'));

console.log(store.getState());