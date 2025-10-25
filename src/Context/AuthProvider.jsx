import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    

    const createUser = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
      const unsub =  onAuthStateChanged(auth, (currentUser)=>{

            setUser(currentUser)
        });
        return ()=>{
            unsub();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
