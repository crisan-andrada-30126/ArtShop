import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack(props) {
    //const props2 = { handleLogin: props.handleLogin }
    const handleLogin = props.handleLogin;
    console.log('props!!!!!!', handleLogin)
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                // component={LoginScreen}
                options={{ header: () => null }}
            >{props => <LoginScreen {...props} handleLogin={handleLogin} />}</Stack.Screen>
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}