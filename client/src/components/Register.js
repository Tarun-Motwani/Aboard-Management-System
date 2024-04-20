import React, { useState } from 'react'
import '../CSS/Login.css'
import { NavLink } from 'react-router-dom'
 import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.minimal.css.map';



const Register = () => {
   const navigate = useNavigate();
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setcPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    fname: "", email: "", Phone: "", Password: "", cPassword: ""
  });
  console.log(inpval)
  const setVal = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    // const {name,value} = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { fname, email, Phone, Password, cPassword } = inpval;
    if (fname === "") {
      alert("Name is required!");
    }
    else if (email === "") {
      alert("Email is required with @ Symbol!");
    }
    else if (!email.includes("@")) {
      alert("Includes @ in your Email!")
      }
    else if (Phone === "") {
      alert("Phone Number is required!");
    }
    else if (Password === "") {
      alert("Password is required");
    }
    else if (Password.length < 6) {
      alert("Password must be 6 character!");
    }
    else if (cPassword === "") {
      alert("Confirm password is required!");
    }
    else if (cPassword.length < 6) {
      alert("Confirm Password must be 6 character!");
    }
    else if (Password !== cPassword) {
      alert("Password and Confirm Password are not matching!")
    }
    else {
      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, Phone, Password, cPassword
        })
      });
      const res = await data.json();
      if (res.status === 201) {
        alert("Registration Successfully done!");
        setInpval({ ...inpval, fname: "", email: "", Phone: "", Password: "", cPassword: "" });
        navigate('/login')
      }
      else {
        alert("User already registered!");
      }


    }
  }
  return (
    <>
      <section>
        {/* <img src={logo} alt='logo'/> */}
        <div className='login'>
          <div className='form_data-1'>
            <div className='form_heading-1'>
              <h1>SIGN UP</h1>
              <p>PLEASE FILL THE REGISTERATION FORM</p>
            </div>
            <form method='POST'>
              <div className='form_input'>
                <label htmlFor='fname'>Name</label>
                <input type="text" autoComplete='off' onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Please enter your name' />
              </div>
              <div className='form_input'>
                <label htmlFor='email'>Email</label>
                <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Please enter your email address' />
              </div>
              <div className='form_input'>
                <label htmlFor='Phone'>Phone</label>
                <input type="text" onChange={setVal} value={inpval.Phone} name="Phone" id="Phone" placeholder='Please enter your Phone Number' />
              </div>
              <div className='form_input'>
                <label htmlFor='Password'>Password</label>
                <div className='two'>
                  <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.Password} name="Password" id="Password" placeholder='Please enter your password' />
                  <div className='showpass' onClick={() => setPassShow(!passShow)}>
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
              <div className='form_input'>
                <label htmlFor='Password'>Confirm Password</label>
                <div className='two'>
                  <input type={!cpassShow ? "password" : "text"} onChange={setVal} value={inpval.cPassword} name="cPassword" id="cPassword" placeholder='Please enter your confirm password' />
                  <div className='showpass' onClick={() => setcPassShow(!cpassShow)}>
                    {!cpassShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
              <input type='submit' className='btn' id='signup' name='signop' value='Sign up' onClick={PostData} />
              <p>If already exist!! <NavLink to='/login'>Log-in</NavLink></p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
