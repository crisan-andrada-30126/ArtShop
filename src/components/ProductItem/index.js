import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import { useNavigation } from '@react-navigation/native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
/*render product component */
const ProductItem = ({ product }) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ProductDetails', { product: product })
    }

    return (

        < Pressable style={styles.root} opacity={1}
            onPress={onPress}
        >
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: product.image }} />

            </View>
            <View style={styles.right}>

                <Text style={styles.title} >
                    {product.name}
                </Text>

                <Text style={styles.description} numberOfLines={3}>
                    <Text style={styles.subTitle} >
                        Description :
                    </Text>
                    {product.description}
                </Text>


                < Text style={styles.descriptionPrice}>
                    Price :
                    {product.price} $
                </Text>
            </View>

        </Pressable >
    )

}

const styles = StyleSheet.create({
    root: {
        marginLeft: 23,
        marginTop: 10,
        marginBottom: 5,
        width: 350,
        height: 150,
        borderRadius: 16,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',


    },
    left: {
        width: '45%',
    },
    right: {
        width: '53%',
    },
    image: {
        margin: 'auto',
        width: 150,
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
    description: {
        marginRight: 3,
        marginLeft: 1,
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'Bree Serif',
        color: 'black',

    },
    descriptionPrice: {
        marginRight: 3,
        marginLeft: 1,
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Bree Serif',
        color: 'black',
    },
    subTitle: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'Bree Serif',
        color: 'black',
        fontWeight: 'bold',
    }

});
export default ProductItem;