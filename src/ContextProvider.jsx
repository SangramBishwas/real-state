import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import auth from "./Firebase/firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const Context = createContext(null)
const googleProvider = new GoogleAuthProvider();
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //-------Log in with email and password-------
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //-------Login with google------
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //-------Login with github------
    //-------Update User Profile----
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name ,
            photoURL: image 
        })
    }
    //------------Log Out-----------
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        creatUser,
        userLogin,
        googleLogin,
        updateUserProfile,
        LogOut
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node
};

export default ContextProvider;