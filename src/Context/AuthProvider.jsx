import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{

        return signOut(auth);
    };

    useEffect(()=>{
      const unsub =  onAuthStateChanged(auth, (currentUser)=>{

            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsub();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading
    };

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
