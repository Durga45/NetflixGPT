import { checkValidData } from "../utils/validate"
import Header from "./Header"
import { useState ,useRef} from "react"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgImg,userImg } from "../utils/constants";






const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true)
  const[errorMessage,setErrorMessage]=useState(null);

  const dispatch=useDispatch();

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
      const name=useRef(null);
      const email=useRef(null);
      const password=useRef(null);

  const handleButtonClick=()=>{
    const messg=checkValidData(email.current.value, password.current.value)
    setErrorMessage(messg)
   if(messg)return;
   
   if(!isSignInForm){
    //sign up logic
  createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: userImg,
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(
        addUser(
          {
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
          }
          )
          );
      
      
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error)
      // ...
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
    // ..
  });

   }
   else{
    //sign in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
  });
   
   }
   }
  


  return (
    <div>
     <Header/>
    <div className="absolute w-full h-1/3 md:h-full">
    <img src={bgImg}/>
    </div>
    <form  onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (
        <input type="text"
          ref={name}
          placeholder="Full name"
          className="p-4 my-4 w-full bg-gray-700"
        />
      )}
      <input
      ref={email}
      type="text"
      placeholder="email or phone number"
      className="p-4 my-4 w-full bg-gray-700 rounded text-black"
      />

      <input
      ref={password}
      type="password"
      placeholder="password" 
      className="p-4 my-4 w-full bg-gray-700 rounded text-black"
      />

      <p className="text-red-700 font-bold text-lg px-2">{errorMessage}</p>

      <button
      className="p-4 my-6  bg-red-700 w-full rounded-lg cursor-pointer" 
      onClick={handleButtonClick}>
      {isSignInForm ? "Sign In" : "Sign Up"}
      </button>

      <p 
      className="py-4 font-bold cursor-pointer" 
      onClick={toggleSignInForm}>
      {isSignInForm ? "New to Netflix? Sign Up now" : "Already a user? Sign In Now"}
      </p>

    </form>
    </div>
  )
}

export default Login