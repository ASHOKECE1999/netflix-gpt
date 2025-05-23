import React, { use, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  

  return <RouterProvider router={appRouter} />;
};

export default Body;
