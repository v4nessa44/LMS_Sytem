import React from 'react'
import "./ResetPassword.css"

const ResetPassword = () => {
  return (
    
      <div className="reset-container">
      <form class="reset">
        <p>Reset Password</p>
        <input type="password" placeholder=" New Password" />
        <input type="password" placeholder=" Confirm New Password" />
        <input type="submit" value="Reset Password" />
      </form>
    </div>
   
  )
}

export default ResetPassword