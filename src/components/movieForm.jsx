import Joi from 'joi-browser';
import Form from './common/form';
import { useParams, Navigate } from 'react-router-dom';
import { getMovie, saveMovie } from './../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
class MovieForm extends Form {
  state = {
    data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Title'),
    number: Joi.number().integer().min(0).max(100).label('Number in Stock'),
    rate: Joi.number().precision(10).min(0).max(10).label('Daily Rental Rate'),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.params.id;
    if (movieId === 'new') return;

    const movie = getMovie(movieId);
    if (!movie) return <Navigate to="*" replace={true} />;

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);

    <Navigate to="/" />;
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genres)}
          {this.renderInput('number', 'Number in Stock', 'number')}
          {this.renderInput('rate', 'Rate')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

const Hello = (props) => <MovieForm {...props} params={useParams()} />;
export default Hello;
