import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert, } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';


/*render product component */
const ArtItem = ({ product }) => {
    const navigation = useNavigation();

    const preview = () => {
        navigation.navigate('ProductDetails', { product: product })
    }
    const editItem = () => {

    }



    return (

        < Pressable onPress={() => preview()} style={styles.root} opacity={1} >
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: product.image }} />

            </View>
            <View style={styles.right}>

                <Text style={styles.title} >
                    {product.name}
                </Text>
                <Text style={styles.data} >
                    Artist:  {product.artist}
                </Text>
                <Text style={styles.data} >
                    Price:  {product.price} $
                </Text>




            </View>

        </Pressable >
    )

}

const styles = StyleSheet.create({
    root: {
        marginLeft: 30,
        marginTop: 10,
        width: 335,
        height: 100,
        borderRadius: 16,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderColor: '#496678',
        borderWidth: 2,

    },
    left: {
        width: '30%',
    },
    right: {
        width: '65%',
    },
    image: {
        margin: 'auto',
        width: 100,
        height: '100%',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        marginBottom: 1
    },
    title: {
        marginTop: 5,
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'Bree Serif',
        color: 'black',
        fontWeight: 'bold'
    },
    data: {
        marginTop: 5,
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Bree Serif',
        color: 'black',
        fontWeight: 'bold'
    },

    btn: {
        flexDirection: "row",
        marginLeft: 5,
        justifyContent: 'space-evenly'

    },


});
export default ArtItem;