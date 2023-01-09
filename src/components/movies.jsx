import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {};
  render() {
    return <h1>whar up!</h1>;
  }
}

export default Movies;
