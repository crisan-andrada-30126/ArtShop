import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import FormInput from '../../components/FormInput';
import React, { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg';
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg';
import LogoutIcon from "../../images/logoutIcon.png";
import ViewEye from '../../images/view.png';
import Favorite from '../../images/Fav.png';
import Color from '../../images/color.png';
import FormButton from '../../components/FormButton';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'

const reference = database().ref('/Paintings');


const UserScreen = (props) => {

    const navigation = useNavigation()
    const user = useSelector((state) => state.user.user)

    const [update, setUpdate] = useState({
        displayName: user.displayName ? user.displayName : '',
        photoURL: '',
        phoneNumber: user.phoneNumber ? user.phoneNumber : '',
    })
    useEffect(() => {
        auth().currentUser.updateProfile(update);

    }, [update])


    return (


        <View style={styles.page} >
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <View style={styles.top}>
                        <TouchableOpacity>
                            <Image source={Color}
                                style={{ width: '100%', height: 150 }}
                            ></Image>

                        </TouchableOpacity>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={user.photoURL ? user.photoURL : require('../../images/user.png')}
                            style={{ width: 120, height: 120, borderRadius: 100, marginTop: -60 }}></Image>

                        <Pressable onPress={() => console.log('img')}  >
                            <Text style={{ color: 'blue', fontWeight: 'bold' }}>
                                Upload profile photo
                            </Text>
                        </Pressable>

                        < View style={styles.root} opacity={0.65} >
                            <View style={styles.left}>
                                <Text style={styles.text}>
                                    Email :
                                </Text>
                            </View>

                            <View style={styles.left}>
                                <Text style={{ borderWidth: 0, width: 170, color: 'black', fontWeight: 'bold', marginTop: 12 }}>
                                    {user.email}
                                </Text>
                            </View>
                        </View>


                        < View style={styles.root} opacity={0.65} >
                            <View style={styles.left}>
                                <Text style={styles.text}>
                                    Name :
                                </Text>
                            </View>

                            <View style={styles.left}>
                                <FormInput
                                    style={{ borderWidth: 0, width: 100, color: 'black', fontWeight: 'bold' }}
                                    value={update.displayName}
                                    placeholderText='Name'
                                    onChangeText={name => setUpdate({ ...update, displayName: name })}

                                />
                            </View>
                        </View>

                        < View style={styles.root} opacity={0.65} >
                            <View style={styles.left}>
                                <Text style={styles.text}>
                                    Phone Number :
                                </Text>
                            </View>

                            <View style={styles.left}>
                                <FormInput
                                    style={{ borderWidth: 0, width: 100, color: 'black', fontWeight: 'bold' }}
                                    value={update.phoneNumber}
                                    placeholderText='PhoneNumber'
                                    onChangeText={number => setUpdate({ ...update, phoneNumber: number })}

                                />
                            </View>
                        </View>
                        <View style={styles.parentBtn}>
                            <View style={styles.btn}>
                                <Pressable onPress={() => navigation.navigate('SellScreen')}
                                    style={styles.add}>
                                    <Text style={styles.addText}>
                                        +
                                    </Text>
                                </Pressable>
                                <Text style={styles.textAdd}>
                                    Add your artworks
                                </Text>
                            </View>

                            <View style={styles.btn}>
                                <Pressable onPress={() => navigation.navigate('YourArtScreen')}
                                    style={styles.viewBtn}>

                                    <Image source={ViewEye}
                                        style={{ width: 35, height: 35, marginTop: 7 }}></Image>

                                </Pressable>
                                <Text style={styles.textView}>
                                    View your posts
                                </Text>
                            </View>

                            <View style={styles.btn}>
                                <Pressable onPress={() => navigation.navigate('YourWishListScreen')}
                                    style={styles.fav} >

                                    <Image source={Favorite}
                                        style={{ width: 40, height: 40, marginTop: 7, marginRight: 2 }}></Image>

                                </Pressable>
                                <Text style={styles.textFav}>
                                    Your Favorites
                                </Text>
                            </View>

                            <View style={styles.btn} >
                                <Pressable onPress={() => props.handleLogout()}
                                    style={styles.btnLogout}>

                                    <Image source={LogoutIcon}
                                        style={{ width: 40, height: 40, marginTop: 5 }}></Image>

                                </Pressable>
                                <Text style={styles.textLogout}>
                                    Logout
                                </Text>
                            </View>
                        </View>


                    </View>

                </ScrollView>
            </ImageBackground>

        </View >

    )
}
const styles = StyleSheet.create({
    parentBtn: {

        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 45,

    },
    btn: {
        flexBasis: '25%',

    },
    fav: {
        marginTop: 15,
        width: 50,
        height: 50,
        backgroundColor: '#DB7093',
        borderRadius: 100,
        alignItems: 'center'

    },
    add: {
        marginTop: 15,
        width: 50,
        height: 50,
        backgroundColor: '#3D3D5E',
        borderRadius: 100,
        alignItems: 'center'
    },
    viewBtn: {
        marginTop: 15,
        width: 50,
        height: 50,
        backgroundColor: '#5C5C9C',
        borderRadius: 100,
        alignItems: 'center'

    },
    addText: {
        marginTop: -12,
        fontSize: 50,
        color: '#fff',
    },
    btnLogout: {
        marginTop: 15,
        width: 50,
        height: 50,
        backgroundColor: '#606F7D',
        borderRadius: 100,
        alignItems: 'center'

    },
    textLogout: {
        color: '#606F7D',
        fontWeight: 'bold'
    },
    textAdd: {
        color: '#3D3D5E',
        fontWeight: 'bold'
    },
    textView: {
        marginLeft: -6,
        color: '#5C5C9C',
        fontWeight: 'bold',
        width: 70,
        textAlign: 'center'
    },
    textFav: {
        marginLeft: -6,
        color: '#DB7093',
        fontWeight: 'bold',
        width: 70,
        textAlign: 'center',
    },
    page: {
        flex: 1
    },
    top: {

        width: '100%',
        backfaceVisibility: '#000',
        height: 150
    },
    container: {

        backgroundColor: 'rgba(226,226,225, 0.8)',
        margin: 10,
        borderRadius: 10,
        height: '90%'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%'
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    root: {
        marginLeft: 10,
        marginTop: 40,
        width: 350,
        height: 50,
        borderRadius: 16,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderColor: 'black',
        borderWidth: 2,

    },
    left: {
        alignItems: 'center',
        width: '35%',
    },
    right: {
        alignItems: 'center',
        width: '65%',
    },
});

export default UserScreen;