import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert, } from 'react-native'

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
                        alert(e);
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
                        Alert.alert("Succes", "User created succesfully. Please verify your email for verification. ");

                    } catch (e) {
                        console.log(e);
                        alert("Something went wrong",);
                    }
                },
                resetPassword: async (email) => {
                    try {
                        await auth().sendPasswordResetEmail(email)
                        Alert.alert("Verification", "We send you an email! Please check your email ! ")
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'LoginScreen' }]
                        })
                    } catch (e) {
                        alert(e)
                    }

                }

            }}
        >
            {children}
        </AuthContext.Provider>
    );
};