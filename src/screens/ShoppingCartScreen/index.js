import { View, Text, Image, StyleSheet, ScrollView, FlatList, Pressable, ImageBackground } from 'react-native'
import React, { useState, useEffect, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import CartProductItem from '../../components/ProductShoppingCart';
import Button from '../../components/Button';
import Background from "../../images/paintBlue.jpg"
import { getFavoritesByUserId } from '../../api/FavoritesApi'
import firestore from '@react-native-firebase/firestore';
import { useSelector, useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native';
import { setRoute } from "../../redux/actions/routesActions"



const cartCollection = firestore().collection('Cart');
const artsCollection = firestore().collection('Artworks');

const ShoppingCartScreen = () => {
    const navigation = useNavigation()
    const [cartItems, setCartItems] = useState([])
    const [items, setItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [loadingItems, setLoadingItems] = useState(false)
    const user = useSelector((state) => state.user.user)
    const prevRoute = useSelector((state) => state.route)
    const [route2, setRoute2] = useState(prevRoute.route)
    const dispatch = useDispatch();
    const route = useRoute().name;

    console.log('route2', { r: route2.name, r2: route })

    // useEffect(() => {

    //     dispatch(setRoute(route))
    //     setRoute2(route)
    // }, [])


    // useEffect(() => {
    //     const currentRoute = useRoute();
    //     if (route.name != route2) {
    //         setLoadingItems(!loadingItems)
    //         dispatch(setRoute(currentRoute))

    //     }
    // }, [])




    useMemo(() => setLoadingItems(!loadingItems), [])

    useEffect(() => {
        let isMounted = true;
        var responselist = []
        cartCollection.get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {

                if (user && user.uid == documentSnapshot.data().userId) {
                    const obj = { iteminCartId: documentSnapshot.data().id, artId: documentSnapshot.data().artId }
                    responselist.push(obj)
                }
            })

            if (isMounted) setCartItems(responselist)
        })
        return () => { isMounted = false }
    }, [loadingItems]);


    useEffect(() => {
        let isMounted = true;
        if (cartItems.length > 0) {
            var artLists = []
            artsCollection.get().then(querySnapshot => {

                querySnapshot.forEach(documentSnapshot => {
                    cartItems.forEach(i => {
                        if (i.artId == documentSnapshot.data().id) {
                            const obj = { itemInCartId: i.iteminCartId, artItem: documentSnapshot.data() }
                            artLists.push(obj)
                        }
                    });



                })
                console.log('artLists', artLists)
                if (isMounted) {
                    setItems(artLists)

                }
            })
        } else {
            setItems([])
        }
        return () => { isMounted = false }
    }, [cartItems])

    useEffect(() => {
        let isMounted = true;
        if (items.length > 0) {
            const price = items.reduce((sum, item) => (
                sum + parseInt(item.artItem.price)
            )
                , 0);
            setTotalPrice(price)

            if (isMounted) {
                setTotalPrice(price)

            }

        } else {
            setTotalPrice(0)
        }
        return () => { isMounted = false }
    }, [items])
    // console.log('user', user)
    const currentDate = new Date();
    //console.log('currentDate', currentDate)
    //console.log('items!!', items[0]?.artItem.createAt)

    //var nanoseconds = items[0]?.createAt.nanoseconds   // nanoseconds since target time that you want to convert to java.util.Date
    // console.log('nanoseconds', nanoseconds)
    // console.log('window.performance.now()', window.performance.now())
    console.log('loadingItems', loadingItems)

    const onCheckout = () => {
        navigation.navigate('Adress')
    }

    return (
        <View>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>



                <View style={styles.root}>

                    {user ? <FlatList data={items}
                        renderItem={({ item }) => (
                            <CartProductItem cartItem={item} setLoadingItems={setLoadingItems} loadingItems={loadingItems} />
                            //render quantity selector

                        )}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                        : <Text style={styles.empty}>Shopping cart is empty</Text>}
                    {user ?
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
                        : <Text></Text>}

                </View >
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    root: {

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
        color: 'black',
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
        height: '70%',
        marginTop: '60%',

        marginLeft: '12%',
        color: '#000',
        fontSize: 28,
        lineHeight: 28,
        fontWeight: 'bold'
    }
})

export default ShoppingCartScreen;