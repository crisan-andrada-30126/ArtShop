import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

/**
 * This provider is created
 * to access user in whole app
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigation = useNavigation()
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                handleLogin: async (email, password) => {
                    try {
                        const userLoged = await auth().signInWithEmailAndPassword(email, password);

                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);

                        await auth().currentUser.sendEmailVerification()

                        await auth().signOut()


                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'LoginScreen' }]
                        })
                        alert("User created succesfully. Please verify your email for verification. ");

                    } catch (e) {
                        console.log(e);
                        alert("Something went wrong");
                    }
                },

            }}
        >
            {children}
        </AuthContext.Provider>
    );
};