import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/User';
import YourArtScreen from "../screens/YourArtScreen"
import SellArtScreen from '../screens/SellArtScreen/SellArtScreen';
import YourFavoritesScreen from '../screens/FavoritesScreen/index';

const Stack = createNativeStackNavigator();

export default function UserStack({ handleLogout, user }) {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ header: () => null }} name='UserScreen'>
                {() => < UserScreen handleLogout={handleLogout} user={user} />}
            </Stack.Screen>
            <Stack.Screen name='YourArtScreen' >
                {() => < YourArtScreen user={user} />}
            </Stack.Screen>
            <Stack.Screen name='YourWishListScreen' component={YourFavoritesScreen} />
            <Stack.Screen name='SellScreen' >
                {() => < SellArtScreen user={user} />}
            </Stack.Screen>
        </Stack.Navigator >
    );
}