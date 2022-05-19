import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/LoginScreen/SignupScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NotLoged from '../screens/LoginScreen/NotLoged';
import ForgotPasswordScreen from '../screens/LoginScreen/ForgotPasswardScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack(props) {

    const handleLogin = props.handleLogin;

    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="NotLoged" options={{ header: () => null }} component={NotLoged} />
            <Stack.Screen name="ResetPassword" options={{ header: () => null }} component={ForgotPasswordScreen} />
            <Stack.Screen
                name='LoginScreen'
                options={{ header: () => null }}
            >{props => <LoginScreen options={{ header: () => null }} {...props} handleLogin={handleLogin} />}</Stack.Screen>
            <Stack.Screen options={{ header: () => null }} name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}