import React from 'react';

import Filter from '../Filter/index.js';

import './style.css';

const Header = ({ name, signOut }) => {
  return (
    <header className="App-header">
      <h1>Hello, <strong>{name}!</strong></h1>
      <p>Welcome to yours notes.</p>
      <button
        onClick={signOut}
        className="m-btn"
        type="submit">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </header>
  );
};

export default Header;