import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';


const reference = database().ref('/Paintings');


const HomeScreen = () => {
    const [data, setData] = useState([])

    const getData = () => {
        reference.on('value', snapshot => {
            let responselist = Object.values(snapshot.val())
            setData(responselist)

        });
    }

    useEffect(() => {
        getData();
    }, []);
    console.log('data', data)

    return (

        <View>
            <View>
                <FlatList data={data}
                    renderItem={({ item }) => <ProductItem product={item} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        </View>
    )
}

export default HomeScreen;