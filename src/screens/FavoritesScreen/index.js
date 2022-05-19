import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'
import ArtItem from './item';

import { getFavoritesByUserId } from '../../api/FavoritesApi'
import firestore from '@react-native-firebase/firestore';

import { useNavigation } from '@react-navigation/native';


const reference = database().ref('/Favorites');


const YourFavoritesScreen = (props) => {
    const navigation = useNavigation()
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


    }, []);

    console.log('items**', items)



    return (


        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                {items.length > 0 ? <FlatList data={items}
                    renderItem={({ item }) => <ArtItem product={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                /> :

                    <Text style={styles.textAdd}>
                        You have not added anyting yet!
                    </Text>


                }
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

export default YourFavoritesScreen;