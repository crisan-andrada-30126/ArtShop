
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import {
    Image
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './homeStack';
import CartStack from './cartStack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SellArtScreen from '../screens/SellArtScreen/SellArtScreen';
import { LoginStack } from './loginStack';
import Providers from './../login/index';
import UserProfil from '../images/userProfil.png';
import Home from '../images/home.png';
import Cart from '../images/cart.png'


const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
    return (

        <Tab.Navigator
            activeColor="#E6E6FA"
            barStyle={{ backgroundColor: 'black' }}
        >
            <Tab.Screen name="Home" component={HomeStack}
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image style={{ width: 27, height: 27 }} source={Home} />
                    ),
                }}
            />


            <Tab.Screen name="more"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Image style={{ width: 25, height: 25 }} source={UserProfil} />
                    ),
                }}
            >
                {() => <Providers />}
            </Tab.Screen >

            <Tab.Screen name="Cart"
                component={CartStack}
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image style={{ width: 27, height: 27 }} source={Cart} />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default BottomTabNav