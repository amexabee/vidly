import Joi from 'joi-browser';
import Form from './common/form';
class MovieForm extends Form {
  state = {
    data: { title: '', number: '', rate: '' },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label('Title'),
    number: Joi.number().integer().min(0).max(100).label('Number in Stock'),
    rate: Joi.number().precision(10).min(0).max(10).label('Daily Rental Rate'),
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          <>
            <label>Genre</label>
            <select className="form-select mb-2">
              <option selected></option>
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

export default MovieForm;
