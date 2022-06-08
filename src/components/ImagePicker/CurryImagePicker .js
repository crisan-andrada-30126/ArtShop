import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import RenderFileUri from './FileUri';
import Button from '../Button';

const CurryImagePicker = ({ image, onImagePicked }) => {

    const [selectedImage, setSelectedImage] = useState();
    const [imageUri, setImageUri] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [imageData, setImageData] = useState("")





    const takePic = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };


        launchCamera(options, response => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                alert('ImagePicker Error: ' + response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response Assets', response.assets)
                // console.log('response!!', JSON.stringify(response));
                setImagePath(response.assets[0].fileName)
                setImageData(response.assets[0].uri)
                setImageUri(response.assets[0].uri)
                onImagePicked({ uri: response.assets[0].uri });
            }

        })
    }

    const openImageLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response Assets URI *****', response.assets[0].path)
                //   console.log('response!!', JSON.stringify(response));
                setImagePath(response.assets[0].fileName)
                setImageData(response.assets[0].uri)
                setImageUri(response.assets[0].uri)
                onImagePicked({ uri: response.assets[0].uri });
            }
        });

    }

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <RenderFileUri imageUri={imageUri} previewImage={styles.previewImage} />

            </View>
            <View style={styles.btn}>
                <View style={styles.btn}>
                    <Button
                        text="Take a picture"
                        onPress={takePic}
                        containerStyles={{ height: 27 }}
                    >

                    </Button>
                </View>

                <View style={styles.btn}>
                    <Button
                        containerStyles={{ height: 27 }}
                        text="Choose an Image "
                        onPress={openImageLibrary}
                    >

                    </Button>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 8,
        marginTop: 4,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 175,

    },
    btn: {
        flexDirection: "row",
        marginLeft: 5,
        justifyContent: 'space-evenly',

    },
    previewImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    }


})
export default CurryImagePicker; 