
import React, { useState } from 'react'
import { SafeAreaView, TextInput, View, Image } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
import BottomTabNav from './bottomTabNav';
import logo from "../images/TOA.png"
import Providers from './../login/index';

const Stack = createNativeStackNavigator();



const HeaderComponent = ({ searchValue, setSearchValue }) => {

    return (
        <SafeAreaView style={{ backgroundColor: '#13405e' }}>
            <View style={{ height: 100 }}>
                <Image
                    style={{ width: '40%', height: '20%', marginTop: 10, marginLeft: '30%', alignContent: 'center' }}
                    source={logo}
                />
                <TextInput
                    style={{ height: 45, margin: 10, padding: 5, backgroundColor: 'white', borderRadius: 8 }}
                    placeholder="Search ..."
                    value={searchValue}
                    onChangeText={(text) => setSearchValue(text)}
                />
            </View>

        </SafeAreaView>

    )
}

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState("")

    return (

        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                options={{ header: () => null }}
            >
                {() => <HomeScreen setSearchValue={setSearchValue} searchValue={searchValue} HeaderComponent={HeaderComponent} />}
            </Stack.Screen>
            <Stack.Screen name="ProductDetails" component={ProductScreen} />
            <Stack.Screen name="HomeTabs" component={BottomTabNav} />
            <Stack.Screen name="ProviderAuth" options={{ header: () => null }} component={Providers} />
        </Stack.Navigator>

    )
}

export default HomeStack 
