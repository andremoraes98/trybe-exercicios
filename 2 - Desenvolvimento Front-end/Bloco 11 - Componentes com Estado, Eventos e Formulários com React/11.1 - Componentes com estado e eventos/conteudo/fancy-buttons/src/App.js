import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickMid = this.handleClickMid.bind(this);
    this.handleClickRigth = this.handleClickRigth.bind(this);
  }

  handleClickLeft() {
    console.log('Clicou na esquerda!');
    console.log(this);
  }
  
  handleClickMid() {
    console.log('Clicou no meio!');
    console.log(this);
  }
  
  handleClickRigth() {
    console.log('Clicou na direita!');
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.handleClickLeft }>Esquerda</button>
        <button onClick={ this.handleClickMid }>Meio</button>
        <button onClick={ this.handleClickRigth }>Direita</button>
      </div>
    );
  }
}

export default App;
