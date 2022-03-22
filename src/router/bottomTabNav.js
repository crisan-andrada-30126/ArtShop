
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './homeStack';
import CartStack from './cartStack';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
    return (

        <Tab.Navigator
            activeColor="#E6E6FA"
            barStyle={{ backgroundColor: '#3D3D5E' }}
        >
            <Tab.Screen name="home" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="profile"
                component={CartStack}
                options={{
                    tabBarLabel: 'ShoppingCart',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shoppingcart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="more" component={HomeScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="user" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default BottomTabNav