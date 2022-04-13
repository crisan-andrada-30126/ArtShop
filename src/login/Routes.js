import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from '../router/homeStack';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';
import UserStack from '../login/UserStack'

const Stack = createNativeStackNavigator();

export default function Routes() {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);

    // Handle user state changes
    function onAuthStateChanged(user) {
        if (initializing) setInitializing(false);
        setLoading(false);
    }
    const handleLogout = async () => {
        try {
            await auth().signOut();
            setUser(null)
        } catch (e) {
            console.error(e);
        }


    }
    const handleLogin = async (email, password) => {
        try {

            const logedUser = (await auth().signInWithEmailAndPassword(email, password)).user
            setUser(logedUser)
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <Stack.Navigator>
            {user ? < Stack.Screen options={{ header: () => null }} name="UserStack" >{() => <UserStack handleLogout={handleLogout} user={user} />}</Stack.Screen> :
                <Stack.Screen options={{ header: () => null }} name="LoginScreen">{() => <AuthStack handleLogin={handleLogin} />}</Stack.Screen>}

        </Stack.Navigator>
    );
}