import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { firebaseApp } from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('currentUser', currentUser);
            setUser(currentUser);
        })
        return unsubscribe();
    },[])




    const authInfo= {
        user,
        createUser,
        logInUser,
        providerLogin,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;