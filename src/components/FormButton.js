import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { windowHeight, windowWidth } from '../utils/Dimensions';

export default function FormButton({ buttonTitle, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#13405e',
    color: '#E6E6FA',
    width: 250,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 40
  },
  buttonText: {
    fontSize: 28,
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  }
});