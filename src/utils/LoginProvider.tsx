import React, { useState, useEffect } from 'react'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import auth from '@react-native-firebase/auth'

interface ContextType {
    user: FirebaseAuthTypes.User | null;
    isLoading: boolean;
}

export const LoginContext = React.createContext({} as ContextType);

// interface Props {
//     children?: React.ReactNode;
// }

export default function LoginProvider(props/*: Props*/) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    console.log('!!!!!!!!!!!!user', user)

    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        setUser(user);
        setIsLoading(false);
    }

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(onAuthStateChanged)
       // return subscribe;
    }, []);

    return(
    <LoginContext.Provider value={{ user, isLoading }}>
        {props.children}
    </LoginContext.Provider>)
}
