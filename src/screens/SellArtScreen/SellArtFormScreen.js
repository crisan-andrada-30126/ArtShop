import { View, Text, Image, StyleSheet, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import database from '@react-native-firebase/database';
import Picture from '../../images/pictur.jpg'
import ProductItem from '../../components/ProductItem';
import Background from '../../images/paintBlue.jpg'
import { Component } from 'react';
import ArtForm from './ArtForm';

const reference = database().ref('/Paintings');



export default class SellArtScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('art') ? 'Edit Art' : 'New Art'
        }
    };

    state = {
        art: {
            name: '',
            descriptiom: '',
            width: 0,
            height: 0,
            artist: '',
        },

    }

    componentDidMount() {
        //  const currentArt = this.props.navigation.getParam('art');

        //   if (currentArt) {
        //        this.setState(prevState => ({ art: prevState.art = currentArt }))
        //     }
    }

    onArtUpdated = (art) => {
        console.log(art);
        // this.props.navigation.popToTop();
    }




    render() {
        return (
            <ArtForm

                art={this.state.art}
                //  onArtAdded={this.props.navigation.getParam('artAddedCallback')}
                onArtUpdated={this.onArtUpdated}
            />
        );
    }
}


// const SellArtScreen = () => {


//     return (


//         <View style={styles.container}>
//             <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
//                 <Text>Sell art</Text>
//             </ImageBackground>
//         </View>

//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     image: {
//         flex: 1,
//         justifyContent: "center",
//         width: '100%'
//     },
// });

// export default SellArtScreen;