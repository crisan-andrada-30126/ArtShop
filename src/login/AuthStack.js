import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/LoginScreen/SignupScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack(props) {

    const handleLogin = props.handleLogin;

    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='LoginScreen'
                options={{ header: () => null }}
            >{props => <LoginScreen {...props} handleLogin={handleLogin} />}</Stack.Screen>
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}