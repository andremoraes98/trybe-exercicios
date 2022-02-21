import React from 'react';
import './App.css';
import DragonairInfo from './component/DragonairInfo';
import Header from './component/Header';
import MainPokedex from './component/MainPokedex';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <MainPokedex/>
        <DragonairInfo/>
      </div>
    ) 
  }
}

export default App;
