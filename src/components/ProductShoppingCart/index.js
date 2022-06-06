import { View, Text, Image, StyleSheet, ScrollView, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import { removeFromCart } from '../../api/AddToCartApi'
import { GestureHandlerRootView, Swipeable, TouchableOpacity } from 'react-native-gesture-handler';

/*render product in cart  */




const CartProductItem = ({ cartItem }) => {

    const rightSwipeActions = () => {
        return (
            <TouchableOpacity onPress={() => alert('cartItem.id', cartItem.id)}>
                <View
                    style={{
                        backgroundColor: '#E59EAA',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        marginTop: 10,
                        height: 90,
                        borderRadius: 16,

                    }}
                >

                    <Text
                        style={{
                            color: '#FFF',
                            paddingHorizontal: 10,
                            fontWeight: '600',
                            paddingHorizontal: 30,
                            paddingVertical: 20,
                        }}
                    >
                        Delete
                    </Text>

                </View >
            </TouchableOpacity >
        );
    };


    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={rightSwipeActions}>
                < View style={styles.root}  >
                    <View style={styles.left}>
                        <Image style={styles.image} source={{ uri: cartItem.image }} />

                    </View>
                    <View style={styles.right}>

                        <Text style={styles.title} >
                            {cartItem.name}
                        </Text>
                        <Text style={styles.title} >
                            Painter: {cartItem.artist}
                        </Text>
                        < Text style={styles.descriptionPrice}>
                            Price :
                            {cartItem.price} $
                        </Text>
                    </View>

                </View >
            </Swipeable>
        </GestureHandlerRootView >

    )

}




const styles = StyleSheet.create({
    root: {
        marginLeft: 10,
        marginTop: 10,
        width: 350,
        height: 90,
        borderRadius: 16,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderColor: 'white',
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
        marginBottom: 1,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Bree Serif',
        color: '#000',
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
    swipedRow: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: 5,
        backgroundColor: '#818181',
        margin: 20,
        minHeight: 50,
    },
    swipedConfirmationContainer: {
        flex: 1,
    },
    deleteConfirmationText: {
        color: '#fcfcfc',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#b60000',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    deleteButtonText: {
        color: '#fcfcfc',
        fontWeight: 'bold',
        padding: 3,
    },

});
export default CartProductItem;