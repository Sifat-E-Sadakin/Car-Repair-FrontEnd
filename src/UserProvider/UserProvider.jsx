import React, { createContext, useContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export let UserContext = createContext(null)



const UserProvider = ({ children }) => {

    const auth = getAuth(app);

    let createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
       let unsubscribe = onAuthStateChanged(auth, user=>{
            
            console.log('onAuth Change', user);
        })
        return ()=> unsubscribe();
        
    },[])
    let newUser= {
        createUser,
        signIn
    }
    return (
        <UserContext.Provider value={newUser}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;