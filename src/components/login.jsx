import { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends Component {
  state = { data: { username: '', password: '' }, errors: {} };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ id, value }) => {
    const data = { [id]: value };
    const schema = { [id]: this.schema[id] };
    const { error } = Joi.validate(data, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    const data = { ...this.state.data };
    data[input.id] = input.value;
    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.username}
            error={errors.username}
            name="username"
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            value={data.password}
            error={errors.password}
            name="password"
            label="Password"
            onChange={this.handleChange}
          />
          <button disabled={this.validate()} className="btn btn-primary mt-2">
            Login
          </button>
        </form>
      </div>
    );
  }
}

/*
FOR SOME STRANGE REASON WHEN I USE THE FUNCTIONAL COMPONENT BELOW IT IS WARNING ME THAT I AM TRYING TO CHANGE AN 
UNCONTROLLED COMPONENT TO A CONTROLLED ONE EVEN THOUGH I USED USE STATE AND REFER TO IT TO MAKE IT CONTROLLED 

const LoginForm = () => {
  const [data, setdata] = useState({
    data: { username: '', password: '' },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  const handleChange = ({ target: input }) => {
    const newdata = { ...data };
    newdata[input.id] = input.value;
    setdata(newdata);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={data.username}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
};

*/

export default LoginForm;
