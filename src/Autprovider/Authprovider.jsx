import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AUthContext = createContext(null)

const Authprovider = ({ children }) => {
    // const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const allValues = {
        createUser,
        signInUser,
        loader
    }
    return (

        <AUthContext.Provider value={allValues}>
            {children}
        </AUthContext.Provider>
    );
};

export default Authprovider;