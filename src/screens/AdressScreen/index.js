import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import MarbleImg from '../../images/marble.jpg'


const reference = database().ref('/Paintings');


const AdressScreen = () => {


    return (


        <View style={styles.container}>
            <ImageBackground source={MarbleImg} resizeMode="cover" style={styles.image}>
                <Text>Adress</Text>
            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%'
    },
});

export default AdressScreen;