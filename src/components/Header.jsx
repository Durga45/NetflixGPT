import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { netflixLogo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {

 const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store => store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      
      navigate("/error")
    });
  }

  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser(
        {
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
        }
        ))
       navigate("/browse")
  } else {
// User is signed out
dispatch(removeUser());
navigate("/")
 }
});
//unsubscribe when component unmount
 return ()=> unSubscribe()
},[])


const handleGptSearchClick=()=>{
  dispatch(toggleGptSearchView())
}

  return (
  <div className="flex  justify-between  w-full h-20 py-2 absolute z-10  ">
      <div>
        <img
        className="h-20 w-26 rounded-full "
         src={netflixLogo}/>
      </div>
      { user && (
         <div className="flex gap-4 px-4">
         <button className="text-white border boder-black bg-purple-700 rounded-md px-4  py-2 my-2 mx-2" onClick={handleGptSearchClick}>GPT-Search</button>
          <img 
          className="w-16 h-16 rounded-full"
          src={user?.photoURL}/>
          <button onClick={handleSignOut}
          className="border border-solid border-black bg-red-500 text-white px-2 h-8 my-4 font-bold rounded-md"
          >Sign out</button>
         </div>
      )}
      
  </div>
  )
  }
export default Header