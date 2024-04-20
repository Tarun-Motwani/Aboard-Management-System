import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Login.css'
import logo from '../images/logo.png'

const Login = () => {
  const navigate = useNavigate();
  // const [email,setEmail] = useState('');
  // const [password,setpassword] = useState('');
  const [passShow, setPassShow] = useState(false);
  // const [cpassShow, setcPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    fname: "", email: "", Phone: "", work: "", Password: "", cPassword: ""
  });
  console.log(inpval)
  const setVal = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    // const {name,value} = e.target;

    setInpval({ ...inpval, [name]: value });
  };
  const loginuser = async (e) => {
    e.preventDefault();
    const { email, Password } = inpval;

    if (email === "") {
      alert("Email is required with @ Symbol!");
    }
    else if (!email.includes("@")) {
      alert("Includes @ in your Email!")
      }
    else if (Password === "") {
      alert("Password is required");
    }
    else if (Password.length < 6) {
      alert("Password must be 6 character!");
    }
    else {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, Password
        })
      });
      const data = await res.json();
      if (data.status === 201) {
        navigate('/')
        setInpval({ ...inpval,email: "",Password: ""});
    }
    else{
      alert("Invalid details");
    } 
      // if(res.status === 201)
      // {
      //   localStorage.setItem("userdatatoken",res.result.token)
      //   setInpval({...inpval,email:"",Password:""});
      // }


    }
  }

  return (
    <>
      <section>
      
        <div className='login'>
        <div className='form_data'>
       
          <div className='form_heading'>
            <h1>Login</h1>
            
            <p>Welcome to GOBAL ACADEMIA</p>
          </div>
          <img src={logo} alt='logo' className='logo' />
          <form method='POST'>
            <div className='form_input'>
              <label htmlFor='email'>Email</label>
              <input type="email" onChange={setVal} name="email" id="email" placeholder='Please enter your email address' />
            </div>
            <div className='form_input'>
              <label htmlFor='Password'>Password</label>
              <div className='two'>
                <input type={!passShow ? "password" : "text"} onChange={setVal} name="Password" id="Password" placeholder='Please enter your password' />
                <div className='showpass' onClick={() => setPassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className='btn' id='sign in' name='Login' value='Login' onClick={loginuser} component={NavLink} to='/'>Log-in</button>
            <p>Create a New Account?      <NavLink to='/register'>Sign-up</NavLink></p>
            <p>Forgot Password!!          <NavLink to='/password-reset'>Click here</NavLink></p>
          </form>
        </div>
        </div>
      </section>
    </>
  )
}

export default Login

// how to shift content  in css?  








