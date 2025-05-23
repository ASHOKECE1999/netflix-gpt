import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { languageOptions, LOGO } from "../utils/constants";
import { toggleSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gptSearch = useSelector((state) => state.gptSearch.isGptSearchEnable);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(changeLanguage(selectedLanguage));

    console.log("Selected language:", selectedLanguage);
  };
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/")
      })
      .catch((error) => {
        // navigate("/error")
      });
  };
  const toggleHandler = () => {
    dispatch(toggleSearch());
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // console.log(user, "fromAFtetLogn");
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unSubsribes when component UnMount
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-[100%] z-30 flex items-center justify-between m-0 p-4">
      <img className="h-[100px]" alt="logo" src={LOGO} />
      {user && (
        <div className="flex items-center justify-between">
          {gptSearch && (
            <select
              className="px-4 py-2 mr-4 bg-gray text-gray-600"
              onChange={handleLanguageChange}
            >
              {languageOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-gray-800 rounded-md text-white font-bold px-4 py-2 hover:bg-purple-600"
            onClick={toggleHandler}
          >
            GPT Search
          </button>
          <img
            className=" mr-3 w-[50px] rounded-lg hover:bg-white p-1"
            src={user.photoURL}
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="bg-black text-white font-bold p-2 rounded-xl mr-2 hover:bg-slate-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
