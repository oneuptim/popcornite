import React, { Component } from 'react';
import Form from './form';
import MoviesList from './movies-list';
import AutocompleteSearch from './autocomplete-search';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://media.giphy.com/media/ri79CvvApKhIQ/giphy.gif" className="App-logo" alt="logo" />
          <h1 className="App-title">Popcornite</h1>
        </header>
        {/* <Form /> */}
        <AutocompleteSearch />
      </div>
    );
  }
}

export default App;
