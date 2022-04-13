import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'


const reference = database().ref('/Paintings');


const YourArtScreen = () => {


    return (


        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <Text> YourArtScreen</Text>
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

export default YourArtScreen;