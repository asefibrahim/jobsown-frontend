import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../FirebaseConfig/FirebaseConfig";

const DataContext = createContext();

// Custom hook to consume the context
export const useData = () => useContext(DataContext);

// Provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const setDataValue = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, setData: setDataValue }}>
      {children}
    </DataContext.Provider>
  );
};

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, phoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: phoUrl,
    });
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   if (currentUser) {
      //     fetch("https://illusion-school-server.vercel.app/jwt", {
      //       method: "POST",
      //       headers: {
      //         "content-type": "application/json",
      //       },
      //       body: JSON.stringify({ email: currentUser.email }),
      //     })
      //       .then((res) => res.json())
      //       .then((data) => {
      //         localStorage.setItem("token", data.token);
      //         setLoading(false);
      //       });
      //   } else {
      //     localStorage.removeItem("token");
      //   }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    updateUserProfile,
    googleLogin,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
