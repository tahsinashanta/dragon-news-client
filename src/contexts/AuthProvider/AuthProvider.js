import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading ] = useState(true)

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile (auth.currentUser, profile)
    }
    
    const verifyEmail = () => {
      return  sendEmailVerification(auth.currentUser)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => 
        {
          console.log('inside auth state changed', currentUser); 
          if( currentUser === null || currentUser.emailVerified){
            setUser(currentUser); 
          }
          setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    } , [])
    const authInfo = {user, updateUserProfile, verifyEmail,
        loading, setLoading, providerLogin ,logOut, createUser, signIn};

    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;