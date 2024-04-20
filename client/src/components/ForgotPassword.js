import React,{useState} from 'react'
// import { ToastContainer } from 'react-toastify';
import { NavLink,useNavigate,useParams } from 'react-router-dom'
// import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = () => {
  const { id, token } = useParams();

  const navigate = useNavigate();
  

  const [Password, setPassword] = useState("");

  const setval = (e) => {
    setPassword(e.target.value)
  }

  const sendpassword = async (e) => {
    e.preventDefault();

    if (Password === "") {
      alert("Password is required");
    }
    else if (Password.length < 6) {
      alert("Password must be 6 character!");
    }
    else {
      const res = await fetch(`/forgotpassword/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ Password })
      });

      const data = await res.json()

      if (data.status === 201) {
        setPassword("")
        alert("Password updated successfully");
      } else {
        navigate("*")
      }
    }
  }

  // userValid()

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
              <input type="password" value={Password} onChange={setval} name="password" id="password" placeholder='Enter Your new password' />
            </div>

            <button className='btn' onClick={sendpassword}>Send</button>
          </form>
          <p><NavLink to="/login">Login</NavLink></p>
        </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword
