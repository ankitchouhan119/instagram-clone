import React from 'react';
import './Sidenav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logoutUser, loginUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { Instagram } from '@mui/icons-material';

const Sidenav = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout =() => {
    dispatch(logoutUser())
    signOut(auth);
  }


  return (
    <div className='sidenav'>
      <div className="insta_logo">

      {/* <Instagram className='insta_icon'/> */}
        <img className='sidenav_instaicon' src="instaicon.png" alt="" />
        <img className='sidenav_logo' src="Sidenav_logo.png" alt="" />
      </div>
      
      <div className="sidenav_btns">
        <button className="side_btn">
          <HomeIcon/>
          <span>Home</span>
        </button>
        <button className="side_btn">
          <SearchIcon/>
          <span>Search</span>
        </button>
        <button className="side_btn">
          <ExploreIcon/>
          <span>Explore</span>
        </button>
        <button className="side_btn">
          <SlideshowIcon/>
          <span>Reels</span>
        </button>
        <button className="side_btn">
          <ChatIcon/>
          <span>Messages</span>
        </button>
        <button className="side_btn">
          <FavoriteBorderIcon/>
          <span>Notification</span>
        </button>
        <button className="side_btn">
          <AddCircleOutlineIcon/>
          <span>Create</span>
        </button>
        <button className="side_btn profile_btn">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
            {/* <button onClick={handelLogout} className="logout_btn">
              Logout
            </button> */}
          </span>
        </button>
        
      </div>
      <div className="sidenave_more">
      <button className="side_btn">
          <MenuIcon/>
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>

  )
}

export default Sidenav;
