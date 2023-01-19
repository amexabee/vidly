import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
