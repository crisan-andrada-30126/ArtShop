import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

const RenderFileUri = ({ imageUri, previewImage }) => {
    if (imageUri) {
        return <Image
            source={{ uri: imageUri }}
            style={previewImage}
        />
    } else {
        return <Image
            source={require('../../images/upload.png')}
            style={previewImage}
        />
    }
}
export default RenderFileUri 