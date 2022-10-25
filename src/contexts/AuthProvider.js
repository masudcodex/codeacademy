import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseApp } from '../firebase/firebase.config';
import userEvent from '@testing-library/user-event';


const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }




    const authInfo= {
        createUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;