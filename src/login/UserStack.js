import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/User';

const Stack = createNativeStackNavigator();

export default function UserStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='UserScreen' component={UserScreen} />
        </Stack.Navigator>
    );
}