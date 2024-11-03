import React from 'react'
import "./Signup.css"
import "../Login/Login.css"

const Signup = () => {
  return (
    
      <div className="register-container">
      <form class="login">
        <h2>Welcome, User!</h2>
        <p>Please Register</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Register" />
        <div class="links">
          <a href="/login">Login</a>
        </div>
      </form>
    </div>
   
  )
}

export default Signup