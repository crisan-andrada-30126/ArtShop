import { View, Text, Image, StyleSheet, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import CartProductItem from '../../components/ProductShoppingCart';
import Button from '../../components/Button';

const products = [
    { quantity: 1, Title: 'Painting3', Description: 'A nic', Price: '135', Painter: 'unknown' },

    { quantity: 1, Title: 'Painting', Description: 'A nicee beautyyy nice aaa mnahsjhusdy hsgfdyfdt goodaaaa', Price: '100', Painter: 'andrada' }]


const ShoppingCartScreen = () => {
    const navigation = useNavigation()
    const [data, setData] = useState(products)

    const totalPrice = data.reduce((sum, item) => (
        sum + (item.Price * item.quantity)
    )
        , 0);

    const onCheckout = () => {
        navigation.navigate('Adress')
    }
    return (

        <View style={styles.root}>


            <FlatList data={data}
                renderItem={({ item }) => (
                    <CartProductItem cartItem={item} />
                    //render quantity selector

                )}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />

            <View>
                <Text style={styles.subtotal}>Subtotal ({data.length}) items:
                    <Text style={styles.subtotalNumber}> {totalPrice} $</Text>
                </Text>
                <Button text='Proceed to checkout'
                    onPress={onCheckout}
                    containerStyles={{
                        backgroundColor: '#DB7093'
                    }}
                />


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgba(226,226,225, 0.8)',
        margin: 10,
        borderRadius: 10,
        height: '90%'
    },
    subtotal: {
        marginVertical: 10,
        color: '#3D3D5E',
        fontSize: 16,
        lineHeight: 20,

    },
    subtotalNumber: {
        marginVertical: 10,
        color: '#5C5C9C',
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 'bold'
    }
})

export default ShoppingCartScreen;