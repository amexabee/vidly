import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from './utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
    navigate: false,
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleNavigate = () => {
    this.setState({ navigate: true });
  };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      sortColumn,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sort = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sort, currentPage, pageSize);

    return { totalCount: filtered.length, movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, sortColumn, navigate } = this.state;
    if (navigate) return <Navigate to="new" />;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary mb-2"
            onClick={this.handleNavigate}
          >
            New Movie
          </button>
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
