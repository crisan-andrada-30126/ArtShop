import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import { AuthContext } from '../../login/AuthProvider';
import auth from '@react-native-firebase/auth';
import Background from '../../images/paintBlue.jpg'

export default function LoginScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Login</Text>
                <FormInput
                    value={email}
                    placeholderText='Email'
                    onChangeText={userEmail => setEmail(userEmail)}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoCorrect={false}
                />
                <FormInput
                    value={password}
                    placeholderText='Password'
                    onChangeText={userPassword => setPassword(userPassword)}
                    secureTextEntry={true}
                />
                <FormButton buttonTitle='Login' onPress={() => props.handleLogin(email, password)} />
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => props.navigation.navigate('Signup')}
                >
                    <Text style={styles.navButtonText}>New user? Join here</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => props.navigation.navigate('ResetPassword')}
                >
                    <Text style={styles.navButtonText}>Forgot password</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
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
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    },

    navButton: {
        marginTop: 10
    },
    navButtonText: {
        fontSize: 20,
        color: 'black'
    }
});