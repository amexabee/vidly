import { Component } from 'react';

class LoginForm extends Component {
  state = { account: { username: '', password: '' } };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
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
