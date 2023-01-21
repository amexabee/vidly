import { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState({
    account: { username: '', password: '' },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  const handleChange = (e) => {
    const newAccount = { ...account };
    newAccount.username = e.target.value;
    setAccount(newAccount);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={account.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" className="form-control" id="password" />
        </div>
        <button className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
