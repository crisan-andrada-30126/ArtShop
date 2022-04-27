import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'
import firestore from '@react-native-firebase/firestore';

const artsCollection = firestore().collection('Artworks');



console.warn("HOME")
const HomeScreen = () => {

    const [artworks, setArtworks] = useState([])


    const getData = () => {

        artsCollection.get().then(querySnapshot => {

            let responselist = []
            querySnapshot.forEach(documentSnapshot => {
                responselist.push(documentSnapshot.data())
            })
            setArtworks(responselist)

        });


    }

    useEffect(() => {

        getData();
    }, []);

    return (


        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <FlatList data={artworks}
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