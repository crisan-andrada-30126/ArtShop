import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'
import ArtItem from '../../components/ArtItem/item';
import { getFavoritesByUserId } from '../../api/FavoritesApi'
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';


const favsCollection = firestore().collection('Favorites');
const artsCollection = firestore().collection('Artworks');


const YourFavoritesScreen = (props) => {
    const navigation = useNavigation()
    const [favoritesItemsIds, setFavoritesItemsIds] = useState([])
    const [items, setItems] = useState([])
    const user = useSelector((state) => state.user.user)

    useEffect(() => {
        let isMounted = true;
        var responselist = []
        favsCollection.get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                if (user.uid == documentSnapshot.data().userId) {
                    responselist.push(documentSnapshot.data().artId)
                }
            })
            if (isMounted) setFavoritesItemsIds(responselist)
        })
        return () => { isMounted = false }
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (favoritesItemsIds.length > 0) {
            var artLists = []
            artsCollection.get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {

                    if (favoritesItemsIds.includes(documentSnapshot.data().id)) {
                        artLists.push(documentSnapshot.data())
                    }
                })

                if (isMounted) setItems(artLists)
            })
        }
        return () => { isMounted = false }
    }, [favoritesItemsIds])

    return (


        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                {items.length > 0 ? <FlatList data={items}
                    renderItem={({ item }) => <ArtItem product={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                /> :
                    <View style={styles.noItems} opacity={0.7}>

                        <Text style={styles.textAdd} >
                            You have nothing in your wish list yet!
                        </Text>
                    </View>

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
    textAdd: {
        marginTop: 13,
        fontSize: 30,
        color: '#DB7093',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    noItems: {
        height: 110,
        backgroundColor: '#FFF',
        marginRight: 30,
        marginLeft: 30,
        borderRadius: 15,
    }
});

export default YourFavoritesScreen;