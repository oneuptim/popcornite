import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY, POSTER_API } from './constants/api';
import MoviesList from './movies-list';
import SearchDropdown from './search-dropdown';
import { Input } from 'antd';
import './App.css';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.showAutocomplete = true;
    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }

  // componentWillUpdate(nextProps, nextState){
  //   console.log(nextProps, nextState, '<=== WILL UPDATE');
  // }

  selectMovie(e) {
    console.log('Select movie clicked', "'",this.state.name,"'", '<== STATE');
    this.showAutocomplete = false;
    let selectedValue = e.target.dataset.value;
    console.log(e.target.dataset.value, '<===value clicked on');
    this.setState({
      name: selectedValue,
    }, () => this.handleSubmit, console.log(this.state.name, '<== AFTER Setting new state'))
    this.forceUpdate();
    // console.log(this.state.name, '<== AFTER Setting new state');
    // this.handleSubmit(e);
  }
  
  // Register any  changes to the search box
  handleChange = (e) => {
    this.showAutocomplete = true;        
    let value = e.target.value;
    this.setState({
      resultName: value,
      name: value,
    })
    this.handleSubmit(e);
  }

  // Handle fetching data from API
  handleSubmit = (e) => {
    console.log('Submit called');
    e.preventDefault();
    const term = this.state.name;
    console.log('term --->', term, '<---search term');
    const query = `${BASE_URL}api_key=${API_KEY}&query=${term}`
    if(term) {
      axios.get(query)
      .then( res => {
        this.setState({
          movies: res.data.results,
          total_results: res.data.total_results,
        })
      })
      .catch( err => {
        console.log(err, '<== axios ERROR');
      });
    }
  }

  keyPress(e) {
    if(e.keyCode == 13) {     
      console.log('keypressed')
      // this.setState({
      //   showAutocomplete: false
      // })
    this.showAutocomplete = false;    
    }
  }



  // Reset the autocomplete dropdown to show again
  // componentWillReceiveProps(nextProps) {
  //   if(this.props !== nextProps) {
  //     this.showAutocomplete = true;
  //   }
  // }
  
  render(mountNode) {
    if(this.state.movies) {
      return (
        <div>

          <form className="search" onSubmit={this.handleSubmit}>
            <input 
              type="text"
              name="name"
              htmlFor="name"
              value={this.state.name}
              placeholder="Search movies"
              onChange={this.handleChange}
              className="text-input"
              autoComplete="off"
              onKeyDown={this.keyPress}
            />
          <span className="fa fa-search"></span>
          </form>
          <div className="search-dropdown">
            <ul>
              {this.state.movies.map((movie) => (
                <li key={movie.id} value={movie.title} data-value={movie.title} onClick={(e) => { this.selectMovie(e); }} >{movie.title} ({movie.release_date.slice(0,4)})</li>
              ))}
            </ul>
          </div>
          {/* <SearchDropdown movies={this.state.movies} showAutocomplete={this.state.showAutocomplete} /> */}
          <MoviesList movies={this.state.movies} query={this.state.name} resultName={this.state.resultName} total={this.state.total_results} />        
        </div>
      )
    } else {
      return (
        <div>
          <form className="search" onSubmit={this.handleSubmit}>
            <input 
              type="text"
              name="name"
              htmlFor="name"
              value={this.state.name}
              placeholder="Search movies"
              onChange={this.handleChange}
              className="text-input"
              autoComplete="off"
              onKeyDown={this.keyPress}
            />
          <span className="fa fa-search"></span>
          </form>
        </div>
      )
    }
  }
}