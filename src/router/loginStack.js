import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginContext } from '../utils/LoginProvider';
import Loading from "../components/Loading"

import UserScreen from "../screens/User"


const Stack = createNativeStackNavigator();

export const LoginStack = () => {
    const { user, isLoading } = useContext(LoginContext)
    console.log("ER!!!", user)
    return (

        <Stack.Navigator>
            {isLoading ? <Stack.Screen name="loading"
                options={{ headerShown: false }}
                component={Loading} /> :
                (user ? <Stack.Screen name="UserScreen" component={UserScreen} /> :
                    <Stack.Screen name="signin" component={LoginScreen} />)
            }
        </Stack.Navigator>

    )
}
