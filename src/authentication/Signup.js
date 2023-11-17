import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import './Signup.css'

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSignUp = (event) => {
      event.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => {
          signInWithEmailAndPassword(auth, email, password).then(
            updateProfile(auth.currentUser, {
              displayName: username,
            })
          );
        })
        .catch((err) => {
          alert(err);
        });
    };
  return (
    <div className='signup'>
      <img src="./Sidenav_logo.png" alt="" />
      <input onChange={(e) => setEmail(e.target.value)}
      value={email} type="email" placeholder='Email' />
      <input onChange={(e) => setUsername(e.target.value)}
      value={username} type="text" placeholder='Username' />
      <input onChange={(e) => setPassword(e.target.value)}
      value={password} type="password" placeholder='Password' />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default Signup;
