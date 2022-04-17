
import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import RenderFileUri from './FileUri';
import Button from '../Button';

const CurryImagePicker = ({ image, inImagePicked }) => {

    const [selectedImage, setSelectedImage] = useState();
    const [imageUri, setImageUri] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [imageData, setImageData] = useState("")

    // useEffect(() => {
    //     if (image) {
    //         console.log("useEffect: " + image);
    //         setSelectedImage({ uri: image });
    //     }
    // }, [image])



    const takePic = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };


        launchCamera(options, response => {
            console.log('Response = ', response);
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
            console.log('Response = ', response);

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
                    >

                    </Button>
                </View>

                <View style={styles.btn}>
                    <Button

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
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#13405e',
        backgroundColor: '#eee',
        width: '80%',
        height: 200,

    },
    btn: {
        flexDirection: "row",
        marginLeft: 5,
        justifyContent: 'space-evenly'

    },
    previewImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    }


})
export default CurryImagePicker;