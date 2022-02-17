import React from 'react';
import './App.css';
import Order from './Order.js'

class App extends React.Component {
  
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return <div>
      <Order order = { headphone }/>
      <Order order = { energyDrink }/>
    </div>
  };
}

export default App;