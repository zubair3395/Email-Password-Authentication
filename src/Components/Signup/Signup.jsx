import React, { useState }  from 'react'
import {  useNavigate,Link } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Firebase';
import './Signup.css';
export default function Signup() {
  const navigate= useNavigate()
    const [user, setUser] = useState({
        email: "",
        password:""
    })
    let name, value;
    const handlegetData=(event)=>{
            name= event.target.name;
            value= event.target.value;
         setUser({...user, [name]:value})
    }
    const submitData= async (event)=>{
        event.preventDefault()
        
        await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/home")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
       
    }
  return (
    <div className='container'>
      <h1>Signup Page</h1>
    <p>Please fill out this form with the required information</p>
    <form method='POST'>
      <fieldset>
        <label>Enter Your Email: <input type="email" value={user.email} onChange={handlegetData}  name="email" required /></label>
        <label>Create a New Password: <input type="password" value={user.password} onChange={handlegetData}  name="password" required /></label>
      </fieldset>
      <button onClick={submitData}> Submit </button>
      <p><Link to="/">Already Have account?</Link></p>
    </form>
    </div>
  )
}
