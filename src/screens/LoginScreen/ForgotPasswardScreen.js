import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import { AuthContext } from '../../login/AuthProvider';
import auth from '@react-native-firebase/auth';
import Background from '../../images/paintBlue.jpg'

export default function ForgotPasswordScreen(props) {
    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');

    const handleReset = () => {
        resetPassword(email)

    }

    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Reset Password</Text>
                <Text style={styles.textInfo}>Enter your email and check your imbox for the email with the password reset link</Text>
                <FormInput
                    value={email}
                    placeholderText='Email'
                    onChangeText={userEmail => setEmail(userEmail)}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoCorrect={false}
                />

                <FormButton buttonTitle='Rest Password' onPress={handleReset} />

                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => props.navigation.navigate('LoginScreen')}
                >
                    <Text style={styles.navButtonText}>Go to login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
        color: '#13405e',
        fontWeight: 'bold',
        fontSize: 30
    },
    textInfo: {
        fontSize: 13,
        marginBottom: 10,
        color: '#13405e',
        marginRight: 35,
        marginLeft: 35,
        textAlign: 'center',

    },

    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 20,
        color: '#13405e'
    }
});