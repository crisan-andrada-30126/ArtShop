import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
// import { windowHeight, windowWidth } from '../utils/Dimensions';

export default function FormInput({ labelValue, placeholderText, ...rest }) {
    return (
        <TextInput
            value={labelValue}
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor='#666'
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#3D3D5E',
        backgroundColor: '#E6E6FA',
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 250,
    }
});