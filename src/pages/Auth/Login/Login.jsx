import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form class="login">
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log In" />
        <div class="links">
          <a href="/forgetPassword">Forgot password</a>
          <a href="/signup">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
