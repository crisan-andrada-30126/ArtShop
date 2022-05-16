import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'
import firestore from '@react-native-firebase/firestore';

const artsCollection = firestore().collection('Artworks');


const HomeScreen = ({ searchValue, HeaderComponent, setSearchValue }) => {

    const [artworks, setArtworks] = useState([])
    const [filtredArtworks, setFiltredArtworks] = useState([])



    const getData = () => {

        artsCollection.get().then(querySnapshot => {

            let responselist = []
            querySnapshot.forEach(documentSnapshot => {
                responselist.push(documentSnapshot.data())
            })
            setArtworks(responselist)
            setFiltredArtworks(responselist)
        });

    }


    const searchFilter = (text) => {
        if (text) {
            const newData = artworks.filter((item) => {
                const itemData = item.name ?
                    item.name.toUpperCase() :
                    ''.toUpperCase();

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFiltredArtworks(newData);
            setSearchValue(text);
        } else {
            setFiltredArtworks(artworks);
            setSearchValue(text)
        }
    }

    useEffect(() => {

        getData();
    }, []);
    useEffect(() => {
        searchFilter(searchValue)
    }, [searchValue])

    return (


        <View style={styles.container}>
            <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <FlatList data={filtredArtworks}
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