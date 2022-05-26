import { View, Text, Image, StyleSheet, ScrollView, FlatList, Pressable, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import CartProductItem from '../../components/ProductShoppingCart';
import Button from '../../components/Button';
import Background from "../../images/paintBlue.jpg"
import { getFavoritesByUserId } from '../../api/FavoritesApi'
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux'


const cartCollection = firestore().collection('Cart');
const artsCollection = firestore().collection('Artworks');

const ShoppingCartScreen = () => {
    const navigation = useNavigation()
    const [cartItemsIds, setCartItemsIds] = useState([])
    const [items, setItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const user = useSelector((state) => state.user.user)


    useEffect(() => {
        let isMounted = true;
        var responselist = []
        cartCollection.get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {

                if (user.uid == documentSnapshot.data().userId) {
                    responselist.push(documentSnapshot.data().artId)
                }
            })
            if (isMounted) setCartItemsIds(responselist)
        })
        return () => { isMounted = false }
    }, []);


    useEffect(() => {
        let isMounted = true;
        if (cartItemsIds.length > 0) {
            var artLists = []
            artsCollection.get().then(querySnapshot => {

                querySnapshot.forEach(documentSnapshot => {

                    if (cartItemsIds.includes(documentSnapshot.data().id)) {
                        artLists.push(documentSnapshot.data())
                    }
                })

                if (isMounted) {
                    setItems(artLists)

                }
            })
        }
        return () => { isMounted = false }
    }, [cartItemsIds])

    useEffect(() => {
        let isMounted = true;
        if (items.length > 0) {
            const price = items.reduce((sum, item) => (
                sum + parseInt(item.price)
            )
                , 0);
            setTotalPrice(price)

            if (isMounted) {
                setTotalPrice(price)

            }

        }
        return () => { isMounted = false }
    }, [items])


    const onCheckout = () => {
        navigation.navigate('Adress')
    }

    return (
        <View>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>



                <View style={styles.root}>

                    {user ? <FlatList data={items}
                        renderItem={({ item }) => (
                            <CartProductItem cartItem={item} />
                            //render quantity selector

                        )}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                        : <Text style={styles.empty}>Shopping cart is empty</Text>}
                    <View>
                        <Text style={styles.subtotal}>Subtotal ({items.length}) items:
                            <Text style={styles.subtotalNumber}> {totalPrice} $</Text>
                        </Text>
                        <Button text='Proceed to checkout'
                            onPress={onCheckout}
                            containerStyles={{
                                backgroundColor: '#E59EAA'
                            }}
                        />


                    </View>

                </View >
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgba(226,226,225, 0.8)',
        margin: 10,
        borderRadius: 10,
        height: '95%'
    },
    image: {

        width: '100%',
        height: '100%'

    },
    subtotal: {
        marginVertical: 10,
        color: '#13405e',
        fontSize: 16,
        lineHeight: 20,

    },
    subtotalNumber: {
        marginVertical: 10,
        color: '#5C5C9C',
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 'bold'
    },
    empty: {
        height: '55%',
        marginTop: '50%',

        marginLeft: '20%',
        color: '#5C5C9C',
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold'
    }
})

export default ShoppingCartScreen;