import { useEffect, useState } from 'react';

import { onAuthStateChanged, signOut , getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../../FirebaseSetup/Firebase.init';

initializeAuthentication();

const UseFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setAuthError("");
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user in database
                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name
                });
                alert("register successfully")
                history.replace('/');

            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setAuthError("");
                alert("login successful");
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .then(error => {
                setAuthError(error?.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            alert("signOut successfully")
            setAuthError("")
        })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])

    useEffect(() => {
        fetch(`https://salty-everglades-52224.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
        .then(data=> setAdmin(data.admin))
    },[user.email])
    
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://salty-everglades-52224.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

      
    return {
        user,
        admin,
        authError,
        isLoading,
        registerUser,
        loginUser,
        logOut
    }
};

export default UseFirebase;