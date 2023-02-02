import React, {useEffect} from 'react'
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate= useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.email;
              console.log("uid", uid)
            } else {
              console.log("user is logged out")
            }
          });
         
    }, [])
    const handleLogout = () => {               
        signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        });
    }
  return (
    <div>
      <h1>Hi This is Home Page</h1>
      <button onClick={handleLogout}>Signout</button>
    </div>
  )
}
