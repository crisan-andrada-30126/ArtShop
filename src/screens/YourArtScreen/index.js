import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'
import { getItemsByUserId } from '../../api/ArtApi'
import firestore from '@react-native-firebase/firestore';
import ArtItem from './item';
import { useNavigation } from '@react-navigation/native';

const artsCollection = firestore().collection('Artworks');


const YourArtScreen = (props) => {
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

        // var items = getItemsByUserId(props.user.uid);

        // console.log('items', items)
        // setItems(items)
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
                    <View style={styles.btn}>
                        <Pressable onPress={() => navigation.navigate('SellScreen')}
                            style={styles.add}>
                            <Text style={styles.addText}>
                                +
                            </Text>
                        </Pressable>
                        <Text style={styles.textAdd}>
                            You have not added anyting yet!
                        </Text>
                        <Text style={styles.textAdd}>
                            Add your artwork!
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
    btn: {
        margin: '0 auto',
        width: '50%',


    },
    add: {
        marginTop: 15,
        width: 50,
        height: 50,
        backgroundColor: '#E59EAA',
        borderRadius: 100,
        alignItems: 'center',


    },
    addText: {
        marginTop: -12,
        fontSize: 50,
        color: '#fff',

    },
    textAdd: {
        color: '#DB7093',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default YourArtScreen;