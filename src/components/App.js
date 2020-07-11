import React, { Component } from 'react';
import Nav from './Nav';
import Landing from './Landing';
import Footer from './Footer';
import './App.css';

export default class App extends Component {
  render(){
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}
}

