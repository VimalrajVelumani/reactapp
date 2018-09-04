import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.state = {});
    this.setState({ 'hi': 'test'})
  }
  render() {
    return (
      <div className="App">
       <input type='text'></input>
      </div>
    );
  }
}

export default App;
