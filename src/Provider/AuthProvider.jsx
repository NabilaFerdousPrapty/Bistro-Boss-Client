import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import auth from '../../Firebase/Firebase.config';
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle =  () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const authInfo = {
   user,
    setUser,
   loading,
   setLoading,
   signInWithGoogle
  };
 
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;