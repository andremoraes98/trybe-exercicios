import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/about' component={ About } />
          <Route path='/projects' component={ Projects } />
          <Route path='/contact' component={ Contact } />
          <Route path='/' component={ Home } />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
