import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickMid = this.handleClickMid.bind(this);
    this.handleClickRigth = this.handleClickRigth.bind(this);

    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClickLeft() {
    console.log('Clicou na esquerda!');
    console.log(this.state.numeroDeCliques);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
    console.log(this.state.numeroDeCliques);
  }
  
  handleClickMid() {
    console.log('Clicou no meio!');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
  }
  
  handleClickRigth() {
    console.log('Clicou na direita!');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.handleClickLeft }> {this.state.numeroDeCliques} </button>
        <button onClick={ this.handleClickMid }> {this.state.numeroDeCliques} </button>
        <button onClick={ this.handleClickRigth }> {this.state.numeroDeCliques} </button>
      </div>
    );
  }
}

export default App;
