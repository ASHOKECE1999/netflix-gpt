import React, { use, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignUp, setSignUp] = useState(true);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const [erroMsg, errorMsgSetter] = useState(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    console.log(email, password);
    const message = checkValidData(email.current.value, password.current.value);
    errorMsgSetter(message);
    console.log(message);
    if (!isSignUp) {
      // Sign Up flow
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          return updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg",
          }).then(() => {
            const updatedUser = auth.currentUser;
            dispatch(
              addUser({
                uid: updatedUser.uid,
                email: updatedUser.email,
                displayName: updatedUser.displayName,
                photoURL: updatedUser.photoURL,
              })
            );
            navigate("/browse");
          });
        })
        .catch((error) => {
          errorMsgSetter(error.code + " - " + error.message);
        });
    } else {
      // Sign In flow
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          errorMsgSetter(error.code + " - " + error.message);
        });
    }
  };

  const signInhandler = () => {
    setSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-opacity-70 bg-black my-36 mx-auto left-0 right-0 w-3/12  flex flex-col items-center p-2 text-white rounded-lg"
      >
        <h1 className="text-3xl font-bold">
          {isSignUp ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignUp && (
          <input
            type="text"
            ref={userName}
            placeholder="Enter Full Name"
            className=" p-2 m-2 bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email AddressHere"
          className=" p-2 m-2 bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className=" p-2 m-2  bg-gray-500"
        />
        {erroMsg !== null ? <h1>{erroMsg}</h1> : null}
        <button
          onClick={handleButtonClick}
          className="p-2 m-2 font-black bg-red-700 mb-[30px] rounded-lg"
        >
          {isSignUp ? "Sign in" : "Sign Up"}
        </button>
        <p onClick={signInhandler}>
          {isSignUp
            ? "are you new to NetFlix?"
            : "are you already existing one Sign In "}
        </p>
      </form>
    </div>
  );
};

export default Login;
