import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState, useCallback } from 'react'
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import FirebaseUtils from '../../utils/FirebaseUtil';

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [create, setCreate] = useState(false)

    const signIn = () => {
        FirebaseUtils.signIn(email, password).then((res) => {
            // navigation.navigate('UserScreen')
        }).catch((e) => {
            console.log(e);
            alert("Emial/ password is wrong");
        })
    };
    const signUp = () => {
        FirebaseUtils.signUp(email, password).then((res) => {
            if (res) {
                alert("User created succesfully");
            }
        }).catch((e) => {
            console.log(e);
            alert("Something went wrong");
        })
    }

    return (
        <View style={styles.container}>

            {create ?
                <>
                    <Text style={styles.textTitle}>SignUp</Text>
                </> :
                <>
                    <Text style={styles.textTitle}>Login</Text>
                </>}

            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={e => setEmail(e)} value={email} />
            <TextInput
                style={styles.input}
                placeholder='Password'
                onChangeText={e => setPassword(e)}
                secureTextEntry={true}
                value={password}
            />
            {create ?
                <>
                    <Button

                        text='Sing Up '
                        onPress={signUp}
                        containerStyles={{
                            backgroundColor: '#DB7093',
                            width: 250
                        }}

                    />
                    <Text style={styles.text}
                        onPress={() => setCreate(false)}
                    >Already have an account? Sign In</Text>
                </> :
                <>
                    <Button
                        text='Sing In '
                        onPress={signIn}
                        containerStyles={{
                            backgroundColor: '#DB7093',
                            width: 250
                        }}

                    />
                    <Text style={styles.text}
                        onPress={() => setCreate(true)}
                    >Create an Account</Text>
                </>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: '#5C5C9C',
        color: '#E6E6FA',
        width: 250,

        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#3D3D5E',
        backgroundColor: '#E6E6FA',
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 250,
    },
    text: {
        color: '#5C5C9C',
        marginTop: 20,
    },
    textTitle: {
        color: '#5C5C9C',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Login