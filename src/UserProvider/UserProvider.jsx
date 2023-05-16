import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export let UserContext = createContext(null)



const UserProvider = ({ children }) => {

    let [user, setUser] = useState([])

    const auth = getAuth(app);

    let createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    let logout = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       let unsubscribe = onAuthStateChanged(auth, user=>{
            setUser(user)
            
            console.log('onAuth Change', user);
        })
        return ()=> unsubscribe();
        
    },[])
    let newUser= {
        createUser,
        signIn,
        user,
        logout
    }
    return (
        <UserContext.Provider value={newUser}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;