import { View, Text, ScrollView, Alert } from 'react-native'
import Button from '../../components/Button'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { ImageBackground } from 'react-native';
import Picture from '../../images/pictur.jpg'
import ImageCarousel from '../../components/ImageCarousel'
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonAR from '../../components/Button/btnAR'
import { useRoute } from '@react-navigation/native'
import Background from "../../images/paintBlue.jpg"
import { addToFavorites, removeFavorit } from '../../api/FavoritesApi';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'

const favorites = firestore().collection('Favorites');



const ProductScreen = (props) => {
    const [isFavorit, setIsFavorit] = useState(false)
    const [yourFavorite, setYourFavorite] = useState([])
    const reduxState = useSelector((state) => state)
    const user = useSelector((state) => state.user.user)


    const navigation = useNavigation()
    const route = useRoute();
    const product = route.params.product


    const getData = () => {

        favorites.get().then(querySnapshot => {

            let responselist = []
            querySnapshot.forEach(documentSnapshot => {

                if (user.uid == documentSnapshot.data().userId && product.id == documentSnapshot.data().artId) {
                    responselist.push(documentSnapshot.data())
                    setYourFavorite(documentSnapshot.data().id)
                }

            })
            if (responselist.length > 0) {
                setIsFavorit(true)
            }
        });


    }

    useEffect(() => {

        getData();
    }, []);

    const removeFromFav = () => {
        removeFavorit(yourFavorite)
        setIsFavorit(false)

    }

    const addToFav = () => {
        if (user.uid) {
            addToFavorites(user.uid, product.id)
            setIsFavorit(true)
        }
        else {

            Alert.alert(
                "Do you have an account ?",
                "Please log in or register for additional benefits",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => navigation.navigate("NotLoged") }
                ]
            );
        }

    }

    return (<ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <ScrollView style={styles.root}>

            <Text style={styles.title}>{product.name}</Text>
            {/*image carousel */}
            <ImageCarousel images={[{ uri: product.image }]} />
            {/*price*/}
            < Text style={styles.price}>
                Price:
                {product.price} $
            </Text>

            {/*description*/}
            <Text style={styles.description}>
                <Text style={styles.subTitle}>
                    Painter:
                </Text>
                {product.artist}
            </Text>
            <Text style={styles.description} numberOfLines={3}>
                <Text style={styles.subTitle} >
                    Description:
                </Text>
                {product.description}
            </Text>
            <Text style={styles.description} numberOfLines={3}>
                <Text style={styles.subTitle} >
                    Size: {product.height} x {product.width}cm
                </Text>

            </Text>
            {/*Buttons*/}
            <Button text={'Add To Cart'}
                onPress={() => { console.warn('add to cart') }} />
            <ButtonAR
                onPress={() => { console.warn('AR') }} />
            {!isFavorit ? <Button
                containerStyles={{ backgroundColor: "#F7AAB7", borderColor: "#E59EAA", marginBottom: 20 }}
                text={'Add To WishList'}
                onPress={() => addToFav()} /> :
                <Button
                    containerStyles={{ backgroundColor: "#E2E2E1", borderWidth: 5, borderColor: "#E59EAA", marginBottom: 20 }}
                    text={'It is on of your favorites list '}
                    onPress={() => removeFromFav()} />
            }

        </ScrollView>
    </ImageBackground>
    )
}



export default ProductScreen