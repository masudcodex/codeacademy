import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { firebaseApp } from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
           
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
            
    },[])




    const authInfo= {
        user,
        createUser,
        emailVerification,
        logInUser,
        providerLogin,
        updateUserProfile,
        loading,
        setLoading,
        resetPassword,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;