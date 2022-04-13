
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
import UserScreen from '../screens/User';
import BottomTabNav from './bottomTabNav';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home"
                component={HomeScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen name="ProductDetails" component={ProductScreen} />
            <Stack.Screen name="HomeTabs" component={BottomTabNav} />

        </Stack.Navigator>

    )
}

export default HomeStack 
