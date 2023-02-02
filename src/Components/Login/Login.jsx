import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase';
import './Login.css'
export default function Login() {
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
    const handleLogin=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
  return (
    <div className='container'>
    <h1>Login Page</h1>
  <p>Please fill out this form with the required information</p>
  <form method='POST'>
    <fieldset>
      <label>Enter Your  Email: <input type="text" value={user.email} onChange={handlegetData} name="email" required /></label>
      <label>Enter Your Pasword: <input type="password" value={user.password} onChange={handlegetData}  name="password" required /></label>
    </fieldset>
    <button onClick={handleLogin}> Login </button>
   <p><Link to="/signup">Signup?</Link></p> 
  </form>
  </div>
  )
}
