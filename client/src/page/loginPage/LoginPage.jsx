import React from'react';
function LoginPage({ handleLogin }) {
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleLogin}>
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email"
        />
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="password"
        />
        <button className="btn btn-primary" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default LoginPage;