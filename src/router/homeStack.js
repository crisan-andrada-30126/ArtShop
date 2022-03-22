
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen name="ProductDetails" component={ProductScreen}

            />
        </Stack.Navigator>

    )
}

export default HomeStack 
