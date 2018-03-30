import React, { Component } from 'react';
import './App.css';
import Cars from './components/Cars';

class App extends Component {
  state = {
    Cars: [
      { name: 'Chevy', type: 'truck'},
      { name: 'Ford', type: 'van'},
      { name: 'Toyota', type: 'car'}      
    ]
  }
  //pass props and change state with parent method
  passWithParentHandler = () => {
    this.setState ({
      Cars: [
        { name: 'Chevrolet', type: 'truck'},
        { name: 'Ford', type: 'van'},
        { name: 'Toyota', type: 'car'}      
      ]
    })
  }
  //pass props and change state with child method
  passWithChildHandler = () => {
    this.setState ({
      Cars: [
        { name: 'Chevy', type: 'truck'},
        { name: 'Henry Ford', type: 'van'},
        { name: 'Toyota', type: 'car'}      
      ]
    })
  }
  passNewValueWithBindHandler = (newName) => {
    this.setState ({
      Cars: [
        { name: 'Chevy', type: 'truck'},
        { name: 'Ford', type: 'van'},
        { name: newName, type: 'car'}      
      ]
    })
  }
  passNewValueWithArrowHandler = (newName) => {
    this.setState ({
      Cars: [
        { name: 'Chevy', type: 'truck'},
        { name: 'Ford', type: 'van'},
        { name: newName, type: 'car'}      
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Cars 
          name={this.state.Cars[0].name} 
          type={this.state.Cars[0].type} 
        />
        <Cars 
          name={this.state.Cars[1].name} 
          type={this.state.Cars[1].type}
          mouseDown={this.passWithChildHandler} 
        />
        <Cars 
          name={this.state.Cars[2].name} 
          type={this.state.Cars[2].type} /> 
          <button onClick={this.passWithParentHandler}> switch to Chevrolet</button>
          <button onClick={this.passNewValueWithBindHandler.bind(this, 'Honda')} > switch to Honda </button>
          <button onClick={(event) => this.passNewValueWithArrowHandler('Hyundai')} > switch to Hyundai </button>
      </div>
    );
  }
}

export default App;
