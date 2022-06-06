import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert, } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { deleteArt } from '../../api/ArtApi'

/*render product component */
const ArtItem = ({ product, setChanged, changed }) => {
    const navigation = useNavigation();

    const preview = () => {
        navigation.navigate('ProductDetails', { product: product })
    }
    const editItem = () => {

    }
    const deleteItem = () => {
        Alert.alert(
            'Delete?',
            'Cannot be undone. Are you sure you want to delete this item ?',
            [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => { deleteArt(product), setChanged(!changed) } }
            ],
            { cancelable: false },
        )

    }
    return (

        < View style={styles.root} opacity={1} >
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: product.image }} />

            </View>
            <View style={styles.right}>

                <Text style={styles.title} >
                    {product.name}
                </Text>
                <View style={styles.btn}>
                    {/* <View style={styles.btn}>
                        <Button
                            text="Edit "
                            onPress={editItem}
                            containerStyles={{ height: 35, width: 65 }}
                        >

                        </Button>
                    </View> */}
                    <View style={styles.btn}>
                        <Button
                            containerStyles={{ height: 35, width: 65, backgroundColor: "#5C5C9C" }}
                            text="Preview "
                            onPress={preview}
                        >

                        </Button>
                    </View>

                    <View style={styles.btn}>
                        <Button
                            containerStyles={{ height: 35, width: 65, backgroundColor: "#E59EAA" }}
                            text="Delete "
                            onPress={deleteItem}
                        >

                        </Button>
                    </View>
                </View>


            </View>

        </View >
    )

}

const styles = StyleSheet.create({
    root: {
        marginLeft: 30,
        marginTop: 10,
        width: 335,
        height: 100,
        borderRadius: 16,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderColor: '#496678',
        borderWidth: 2,

    },
    left: {
        width: '30%',
    },
    right: {
        width: '65%',
    },
    image: {
        margin: 'auto',
        width: 100,
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

    btn: {
        flexDirection: "row",
        marginLeft: 5,
        justifyContent: 'space-evenly'

    },


});
export default ArtItem; 