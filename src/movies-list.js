import React, { Component } from 'react';
import { BASE_URL, API_KEY, POSTER_API } from './constants/api';
import './App.css';

export default class MoviesList extends Component {
  render() {
    if (this.props.movies) {
      return (
        <div>
            <h4>{this.props.total} results for "{this.props.resultName}"</h4>
            <div className="results-container">
              {this.props.movies.map((movie) => (
                <div key={movie.id} className="movie-list">
                  <div className="poster-container">
                    <img src={POSTER_API + movie.poster_path} className="poster-image" />
                  </div>
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p><strong>Release Date</strong><br/> {movie.release_date}</p>
                    <p><strong>Rating</strong><br/> {movie.vote_average}/10</p>
                    <p><strong>Popularity</strong><br/> {movie.popularity}</p>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      )
    } else {
      return <p>No movies</p>
    }
  }
}