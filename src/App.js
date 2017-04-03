import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RestaurantDetail from './containers/RestaurantDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RestaurantDetail />
      </div>
    );
  }
}

export default App;
