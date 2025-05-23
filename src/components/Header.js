import React, { useEffect } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch()

  const handleSignOut=()=>{
    signOut(auth)
              .then(() => {
                // navigate("/")
              })
              .catch((error) => {
                // navigate("/error")
              });
  }

  useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email,displayName,photoURL } = user;
        console.log(user, "fromAFtetLogn");
        dispatch(addUser({ uid: uid, email: email ,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
        
      }
    });


    //unSubsribes when component UnMount
    return ()=>{unSubscribe()}
  }, []);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-[100%] z-20 flex items-center justify-between'>
        <img className='h-[100px]' alt="logo" src={LOGO}/>
     {user && ( <div className='flex items-center justify-between'>
        <img className=' mr-3 w-[40px] rounded-lg hover:bg-white p-2' src={user.photoURL} alt="userIcon"/>
        <button  onClick={handleSignOut} className='bg-black text-white font-bold p-2 rounded-2xl mr-2 hover:bg-slate-600'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header