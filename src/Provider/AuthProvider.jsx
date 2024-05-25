import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../../Firebase/Firebase.config';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInWithGoogle =  () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const signInWithEmailAndPassword=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const LogOut=()=>{
    setLoading(true)
   return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      console.log(currentUser);
      setLoading(false)
    })
    return ()=>{
      unsubscribed()};
  },[])
  const authInfo = {
   user,
    setUser,
   loading,
   setLoading,
   signInWithGoogle,
    createUser,
    signInWithEmailAndPassword,
    LogOut
  };
 
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;