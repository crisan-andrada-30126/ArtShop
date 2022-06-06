import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import { AuthContext } from '../../login/AuthProvider';
import Background from '../../images/paintBlue.jpg'


export default function SignupScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);


    const handleSignup = () => {
        register(email, password)

    }
    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Create an account</Text>
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
                <FormButton
                    buttonTitle='Signup'
                    onPress={handleSignup}
                />
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => props.navigation.navigate('LoginScreen')}
                >
                    <Text style={styles.navButtonText}>Login if you already have an account</Text>
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
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        color: 'black',
        fontSize: 18
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30
    }
});