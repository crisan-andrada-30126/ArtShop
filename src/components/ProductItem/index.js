import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
/*render product component */
const ProductItem = ({ product }) => {
    return (

        < View style={styles.root} opacity={0.85} >
            <View style={styles.left}>
                <Image style={styles.image} source={Picture} />

            </View>
            <View style={styles.right}>

                <Text style={styles.title} >
                    {product.Title}
                </Text>

                <Text style={styles.description} numberOfLines={3}>
                    <Text style={styles.subTitle} >
                        Description :
                    </Text>
                    {product.Description}
                </Text>
                <Text style={styles.description}>
                    <Text style={styles.subTitle}>
                        Painter :
                    </Text>
                    {product.Painter}
                </Text>

                < Text style={styles.descriptionPrice}>
                    Price :
                    {product.Price} $
                </Text>
            </View>

        </View >
    )

}

const styles = StyleSheet.create({
    root: {
        marginLeft: 30,
        marginTop: 10,
        width: 350,
        height: 200,
        borderRadius: 16,
        backgroundColor: '#708090',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderColor: '#3D3D5E',
        borderWidth: 2,

    },
    left: {
        width: '45%',
    },
    right: {
        width: '55%',
    },
    image: {
        margin: 'auto',
        width: 140,
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
        color: '#FDF5E6',
        fontWeight: 'bold'
    },
    description: {
        marginRight: 3,
        marginLeft: 1,
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'Bree Serif',
        color: '#FDF5E6',

    },
    descriptionPrice: {
        marginRight: 3,
        marginLeft: 1,
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Bree Serif',
        color: '#FDF5E6',
    },
    subTitle: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'Bree Serif',
        color: '#E6E6FA',
    }

});
export default ProductItem;