import React, { use, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignUp, setSignUp] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [erroMsg, errorMsgSetter] = useState(null);

  const handleButtonClick = () => {
    console.log(email, password);
    const message = checkValidData(email.current.value, password.current.value);
    errorMsgSetter(message);
    console.log(message);
    if (isSignUp) {
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorMsgSetter(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorMsgSetter(errorCode + "-" + errorMessage);
          // ..
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
