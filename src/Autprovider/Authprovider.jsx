import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";


export const AUthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setUser(null)
        toast.success("Logout successful!");
        return signOut(auth)
    }

    //google login
    const googleSignin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubSignin = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    //Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoader(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    



    const allValues = {
        createUser,
        signInUser,
        
        logout,
        githubSignin,
        googleSignin,
        loader,
        user,
    }
    return (

        <AUthContext.Provider value={allValues}>
            {children}
        </AUthContext.Provider>
    );
};

export default Authprovider;