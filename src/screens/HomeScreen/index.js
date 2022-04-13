import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'


const reference = database().ref('/Paintings');

console.warn("HOME")
const HomeScreen = () => {
    const [data, setData] = useState([])

    const getData = () => {
        reference.on('value', snapshot => {
            let responselist = Object.values(snapshot.val())
            setData(responselist)

        });
    }

    useEffect(() => {
        getData();
    }, []);
    console.log('data', data)

    return (


        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <FlatList data={data}
                    renderItem={({ item }) => <ProductItem product={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
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

export default HomeScreen;