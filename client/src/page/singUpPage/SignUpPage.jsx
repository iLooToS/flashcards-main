import React from "react";

function SignUpPage({ handleSignUp }) {
  return (
    <div>
      <h1>SignUpPage</h1>
      <form onSubmit={handleSignUp}>
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
        />
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
          Рега
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
