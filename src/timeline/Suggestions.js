import { Avatar } from '@mui/material'
import React from 'react'
import "./Suggestions.css"
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';

function Suggestions() {

  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout =() => {
    dispatch(logoutUser())
    signOut(auth);
  }

  

  return (
    <div className='suggestions'>
      <button className="side_btn  profile_btn username_left">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
            <button onClick={handelLogout} className="logout_btn">
              Logout
            </button>
          </span>
        </button>
      <div className="suggestions_title">Suggestions for you</div>
      <div className="suggestions_usernames">
        <div className="suggestions_username">
          <div className="username_left">
            <span className="suggestions_avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info"><span className="username">Ankit</span>
            <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
      </div>
      <div className="suggestions_usernames">
        <div className="suggestions_username">
          <div className="username_left">
            <span className="suggestions_avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username_info"><span className="username">Ankit</span>
            <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
      </div>
      <div className="suggestions_usernames">
        <div className="suggestions_username">
          <div className="username_left">
            <span className="suggestions_avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username_info"><span className="username">Ankit</span>
            <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
      </div>
      <div className="suggestions_usernames">
        <div className="suggestions_username">
          <div className="username_left">
            <span className="suggestions_avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username_info"><span className="username">Ankit</span>
            <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
      </div>
      
    </div>
  )
}

export default Suggestions
