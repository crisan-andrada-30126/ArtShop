import { View, Text, ScrollView } from 'react-native'
import Button from '../../components/Button'
import React from 'react'
import styles from './styles'
import { ImageBackground } from 'react-native';
import Picture from '../../images/pictur.jpg'
import ImageCarousel from '../../components/ImageCarousel'
import Icon from 'react-native-vector-icons/FontAwesome'
import ButtonAR from '../../components/Button/btnAR'
import { useRoute } from '@react-navigation/native'
import Background from "../../images/paintBlue.jpg"

const ProductScreen = (props) => {


    const route = useRoute();
    const product = route.params.product
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
            <Button
                containerStyles={{ backgroundColor: "#F7AAB7", borderColor: "#E59EAA", marginBottom: 20 }}
                text={'Add To WishList'}
                onPress={() => { console.warn('add to wishlist') }} />

        </ScrollView>
    </ImageBackground>
    )
}



export default ProductScreen