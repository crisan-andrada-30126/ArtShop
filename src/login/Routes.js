import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from '../router/homeStack';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';
import UserStack from '../login/UserStack'
import { connect } from 'react-redux';
import { isLoged } from '../redux/actions/loged';
import { saveUser } from '../redux/actions/loged';
import { useDispatch, useSelector } from 'react-redux'


const Stack = createNativeStackNavigator();

function Routes(props) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);
    const dispatch = useDispatch();
    const reduxState = useSelector((state) => state)
    const userState = useSelector((state) => state.user.user)



    // Handle user state changes
    function onAuthStateChanged(user) {
        if (initializing) setInitializing(false);
        setLoading(false);
    }
    const handleLogout = async () => {
        try {
            await auth().signOut();
            setUser(null)
            dispatch(saveUser(null))
            dispatch(isLoged(false))
        } catch (e) {
            console.error(e);
        }


    }
    const handleLogin = async (email, password) => {
        try {

            const logedUser = (await auth().signInWithEmailAndPassword(email, password)).user

            if (logedUser.emailVerified) {
                setUser(logedUser)
                dispatch(saveUser(logedUser))
                dispatch(isLoged(true))
            }
            else {
                alert("This account  is not verified ! Please verify your email !")
                dispatch(saveUser(null))
                dispatch(isLoged(false))
            }


        } catch (e) {
            console.log(e);
            dispatch(saveUser(null))
            dispatch(isLoged(false))
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
            {userState ? < Stack.Screen options={{ header: () => null }} name="UserStack" >{() => <UserStack handleLogout={handleLogout} user={userState} />}</Stack.Screen> :
                <Stack.Screen options={{ header: () => null }} name="LoginScreen">{() => <AuthStack handleLogin={handleLogin} />}</Stack.Screen>}

        </Stack.Navigator>
    );
}

export default Routes;