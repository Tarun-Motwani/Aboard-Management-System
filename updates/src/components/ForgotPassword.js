import React from 'react'
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = () => {
  return (
    <>
      <section>
      <div className='login'>
        <div className="form_data">
          <div className="form_heading">
            <h1>Enter Your New Password</h1>
          </div>

          <form>
            {/* {message ? <p style={{ color: "green", fontWeight: "bold" }}>Password Succesfulyy Update </p> : ""} */}
            <div className="form_input">
              <label htmlFor="password">New password</label>
              <input type="password" value="" onChange="" name="password" id="password" placeholder='Enter Your new password' />
            </div>

            <button className='btn' onClick="">Send</button>
          </form>
          <p><NavLink to="/login">Login</NavLink></p>
          <ToastContainer />
        </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword
