import React, { Component } from 'react';
import { Container, NavBar } from './components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <NavBar/>
          <Container/>
        </p>
      </div>
    );
  }
}

export default App;
