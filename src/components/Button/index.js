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
        backgroundColor: 'black',
        marginVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
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