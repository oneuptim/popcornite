import React, { Component } from 'react';
import { BASE_URL, API_KEY, POSTER_API } from './constants/api';
import './App.css';

export default class SearchDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.selectMovie = this.selectMovie.bind(this);
    this.hideAutocomplete = true;
  }

  selectMovie(e) {
    console.log('Select movie clicked');
    this.hideAutocomplete = false;
    this.forceUpdate();
    console.log(e.target.dataset.value);
    this.setState({
      name: e.target.dataset.value,
      showAutocomplete: false
    })
  }

  // Reset the autocomplete dropdown to show again
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.hideAutocomplete = true;
    }
  }
  
  render() {
    if (this.props.movies && this.hideAutocomplete) {
      return(
        <div className="search-dropdown">
          <ul>
            {this.props.movies.map((movie) => (
              <li key={movie.id} value={movie.title} data-value={movie.title} onClick={(e) => { this.selectMovie(e); }} >{movie.title} ({movie.release_date.slice(0,4)})</li>
            ))}
          </ul>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

