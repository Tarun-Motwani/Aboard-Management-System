import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import "../CSS/Login.css"
import 'react-toastify/dist/ReactToastify.css';

const PasswordReset = () => {

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value)
    }

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
            alert("Email is required with @ Symbol!");
        }
        else if (!email.includes("@")) {
            alert("Includes @ in your Email!")
        } 
        else {
            const res = await fetch("/sendpasswordlink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (data.status === 201) {
                setEmail("");
                setMessage(true)
            } else {
                alert("Invalid details");
            }
        }
    }

    return (
        <>
            <section>
                <div className='login'>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>Enter Your Email</h1>
                        </div>

                        {message ? <p style={{ color: "#f0e912", fontWeight: "bolder" }}>PASSWORD RESET LINK SEND SUCCESSFULLY IN YOUR EMAIL</p> : ""}
                        <form>
                            <div className="form_input">
                                <label htmlFor="email">Email</label>
                                <input type="email" value={email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                            </div>

                            <button className='btn' onClick={sendLink}>Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PasswordReset