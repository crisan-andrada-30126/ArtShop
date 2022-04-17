
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './homeStack';
import CartStack from './cartStack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SellArtScreen from '../screens/SellArtScreen/SellArtFormScreen';
import { LoginStack } from './loginStack';
import Providers from './../login/index';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
    return (

        <Tab.Navigator
            activeColor="#E6E6FA"
            barStyle={{ backgroundColor: '#13405e' }}
        >
            <Tab.Screen name="Home" component={HomeStack}
                options={{

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />


            <Tab.Screen name="more"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="user" color={color} size={26} />
                    ),
                }}
            >
                {() => <Providers />}
            </Tab.Screen >

            <Tab.Screen name="Cart"
                component={CartStack}
                options={{

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shoppingcart" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default BottomTabNav