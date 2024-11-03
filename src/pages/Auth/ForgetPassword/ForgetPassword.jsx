import React from 'react'
import "./ForgetPassword.css"

const ForgetPassword = () => {
  return (
    <div>
      <div className="forget-container">
        <form class="forget">
        <h2>Forget password</h2>
        <p>Please enter your email!</p>
        <input type="email" placeholder="User Email" />
        <input type="submit" value="Forget Password" />
      </form>
    </div>
    </div>
  )
}

export default ForgetPassword