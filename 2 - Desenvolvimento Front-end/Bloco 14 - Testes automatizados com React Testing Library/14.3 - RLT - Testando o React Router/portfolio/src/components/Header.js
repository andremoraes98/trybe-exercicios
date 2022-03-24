import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/projects'>Projects</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </nav>
    )
  }
}

export default Header;
