
import React from 'react'
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
import AdressScreen from '../screens/AdressScreen';
const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="cart"
                component={ShoppingCartScreen}
                options={{ title: 'Shopping Cart' }}
            />
            <Stack.Screen name="Adress" component={AdressScreen}
                options={{ title: 'Adress' }}
            />
        </Stack.Navigator>

    )
}

export default CartStack 
