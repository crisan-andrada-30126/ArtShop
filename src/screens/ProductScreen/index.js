import { View, Text } from 'react-native'
import Button from '../../components/Button'
import React from 'react'
import styles from './styles'
import MarbleImg from '../../images/marble.jpg'
import Picture from '../../images/pictur.jpg'
import ImageCarousel from '../../components/ImageCarousel'
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonAR from '../../components/Button/btnAR'

const ProductScreen = () => {
    const product = { Title: 'Painting', Description: 'A nicee beautyyy nice aaa mnahsjhusdy hsgfdyfdt goodaaaa', Price: '100', Painter: 'andrada' }
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{product.Title}</Text>
            {/*image carousel */}
            <ImageCarousel images={[Picture, MarbleImg]} />
            {/*price*/}
            < Text style={styles.price}>
                Price:
                {product.Price} $
            </Text>

            {/*description*/}
            <Text style={styles.description}>
                <Text style={styles.subTitle}>
                    Painter:
                </Text>
                {product.Painter}
            </Text>
            <Text style={styles.description} numberOfLines={3}>
                <Text style={styles.subTitle} >
                    Description:
                </Text>
                {product.Description}
            </Text>
            {/*Buttons*/}
            <Button text={'Add To Cart'}
                onPress={() => { console.warn('add to cart') }} />
            <ButtonAR
                onPress={() => { console.warn('AR') }} />
            <Button
                containerStyles={{ backgroundColor: "#F7AAB7", borderColor: "#E59EAA" }}
                text={'Add To WishList'}
                onPress={() => { console.warn('add to wishlist') }} />

        </View>
    )
}

export default ProductScreen