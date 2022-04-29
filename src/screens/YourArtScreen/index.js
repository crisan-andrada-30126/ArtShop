import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'
import { getItemsByUserId } from '../../api/ArtApi'
import firestore from '@react-native-firebase/firestore';
import ArtItem from './item';

const artsCollection = firestore().collection('Artworks');


const YourArtScreen = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        var responselist = []
        artsCollection.get().then(querySnapshot => {

            querySnapshot.forEach(documentSnapshot => {

                if (props.user.uid == documentSnapshot.data().userId) {
                    console.log('este!')
                    responselist.push(documentSnapshot.data())
                }


            })

            setItems(responselist)
        });

        // var items = getItemsByUserId(props.user.uid);

        // console.log('items', items)
        // setItems(items)
    }, []);

    console.log('items**', items)
    return (


        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <FlatList data={items}
                    renderItem={({ item }) => <ArtItem product={item} />}
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

export default YourArtScreen;