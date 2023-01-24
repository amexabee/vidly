import { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = { account: { username: '', password: '' }, errors: {} };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (!account.username.trim()) errors.username = 'Username is required';
    if (!account.password.trim()) errors.password = 'Password is required';
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            error={errors.username}
            name="username"
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            value={account.password}
            error={errors.password}
            name="password"
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </div>
    );
  }
}

/*
FOR SOME STRANGE REASON WHEN I USE THE FUNCTIONAL COMPONENT BELOW IT IS WARNING ME THAT I AM TRYING TO CHANGE AN 
UNCONTROLLED COMPONENT TO A CONTROLLED ONE EVEN THOUGH I USED USE STATE AND REFER TO IT TO MAKE IT CONTROLLED 

const LoginForm = () => {
  const [account, setAccount] = useState({
    account: { username: '', password: '' },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  const handleChange = ({ target: input }) => {
    const newAccount = { ...account };
    newAccount[input.id] = input.value;
    setAccount(newAccount);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={account.username}
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
            value={account.password}
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
