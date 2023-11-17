import React, { useState } from 'react'
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ()=>{
      signInWithEmailAndPassword(auth,email,password)
    }
  return (
    <div className='login'>
      <img src="./Sidenav_logo.png" alt="" />
      <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
       type="email" placeholder='Email' 
       />
      <input
      onChange={(e) => setPassword(e.target.value)}
      value={password}
       type="password" placeholder='Password'
        />
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login;
