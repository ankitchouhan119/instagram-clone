
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Homepage from './Homepage';
import Authentication from './authentication/Authentication';
import { auth } from './firebase';
import { loginUser, setLoading } from './features/userSlice';

function App() {
  // const user = useSelector((state) => state.data.user);
 const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
          dispatch(loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          }));
          dispatch(setLoading(false))
      }else{
        console.log("User not logged in")
      }
    });
  },[]);
  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authentication />}</>
      )}
    </div>
  );
}

export default App;
