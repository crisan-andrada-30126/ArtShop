import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'



const Button = ({ text, onPress, containerStyles }) => {
    return (
        <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#708090',
        marginVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#606F7D',
        borderWidth: 1,
        opacity: 2,
        zIndex: 99
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Button;