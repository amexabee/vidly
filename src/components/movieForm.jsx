import Joi from 'joi-browser';
import { getGenres } from '../services/fakeGenreService';
import Form from './common/form';
import { useParams } from 'react-router-dom';
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
    const id = this.props.params.id;
    console.log(id);
    const genres = getGenres();
    this.setState({ genres });
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          <>
            <label>Genre</label>
            <select className="form-select mb-2">
              <option style={{ display: 'none' }} />
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>
            </select>
          </>
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
