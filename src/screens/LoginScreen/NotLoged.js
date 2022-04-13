import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Button from '../../components/Button';
import logo from "../../images/Logo.png"
import Background from '../../images/paintBlue.jpg'

export const NotLoged = (props) => {
    return (

        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>
                    Welcome
                </Text>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <Button containerStyles={styles.btn}
                    text={'LOGIN'}
                    onPress={() => props.navigation.navigate('LoginScreen')} />
                <Button containerStyles={styles.btn2}
                    text={'SINGUP'}
                    onPress={() => props.navigation.navigate('Signup')} />



            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {

        fontSize: 60,
        color: "#13405e"

    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: "#13405e", borderColor: "#13405e", width: 300,

        borderRadius: 0,
        height: 50
    },
    btn2: {
        backgroundColor: "#E59EAA",
        borderColor: "#DB7093",
        width: 300,

        borderRadius: 0,
        height: 50
    },

    logo: {

        bottom: '10%',
        width: 350,
        height: 300,
    },
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
        color: 'black'
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 20,
        color: '#6646ee'
    }
});


export default NotLoged