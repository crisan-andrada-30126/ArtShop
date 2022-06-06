import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AR from '../../images/iconAr.png'


const ButtonAR = ({ onPress, containerStyles }) => {
    return (
        <TouchableHighlight onPress={onPress} style={styles.root}>
            <View style={styles.btnAr}>
                <Text style={styles.text} > View it in your home </Text>
                {/* <Icon name="view-in-ar" size={30} color="#E6E6FA" /> */}
                <Image style={styles.image} source={AR} />
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#5C5C9C',
        marginVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        opacity: 2,
        zIndex: 99
    },
    image: {
        marginLeft: 10,
        width: 25,
        resizeMode: 'contain',
    },
    btnAr: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 16,
        color: '#E6E6FA',
        fontWeight: 'bold'
    }
})
export default ButtonAR;

