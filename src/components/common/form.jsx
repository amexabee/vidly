import { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
  state = { data: {}, errors: {} };

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

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    this.doSubmit();
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

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;
    return (
      <Input
        value={data[name]}
        error={errors[name]}
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        value={data[name]}
        error={errors[name]}
        options={options}
        name={name}
        label={label}
        onChange={this.handleChange}
      />
    );
  };

  renderButton = (label) => (
    <button disabled={this.validate()} className="btn btn-primary mt-2">
      {label}
    </button>
  );
}

export default Form;
