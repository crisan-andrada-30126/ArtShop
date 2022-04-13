import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import QuantitySelector from '../QuantitySelector/index'
/*render product in cart  */
const CartProductItem = ({ cartItem }) => {

    const [quantity, setQuantity] = useState(cartItem.quantity)

    return (

        < View style={styles.root} opacity={0.85} >
            <View style={styles.left}>
                <Image style={styles.image} source={Picture} />

            </View>
            <View style={styles.right}>

                <Text style={styles.title} >
                    {cartItem.Title}
                </Text>
                < Text style={styles.descriptionPrice}>
                    Price :
                    {cartItem.Price} $
                </Text>
                <QuantitySelector quantity={cartItem.quantity} setQuantity={setQuantity} />
            </View>

        </View >
    )

}

const styles = StyleSheet.create({
    root: {
        marginLeft: 10,
        marginTop: 10,
        width: 350,
        height: 90,
        borderRadius: 16,
        backgroundColor: '#13405e',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderColor: '#13405e',
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
        height: '80%',
        marginTop: 7,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        marginBottom: 1,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Bree Serif',
        color: '#fff',
        fontWeight: 'bold'
    },
    descriptionPrice: {
        textAlign: 'left',
        marginRight: 3,
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Bree Serif',
        color: '#fff',
    },


});
export default CartProductItem;