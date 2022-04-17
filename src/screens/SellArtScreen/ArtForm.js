import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    ScrollView,
    ImageBackground
} from 'react-native';
import Background from '../../images/paintBlue.jpg';
import GridList from '../../components/GridList';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { addArt, updateArt, uploadArt } from '../../api/ArtApi';
import ImagePicker from '../../components/ImagePicker/CurryImagePicker';
import Button from '../../components/Button';
import NumberPlease from "react-native-number-please";

const ArtForm = (props) => {
    const sizeNumber = [{ id: "size", label: "?", min: 0, max: 2000 }];


    setArtImage = (image) => {
        props.setFieldValue('imageUri', image.uri);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <ScrollView style={styles.containerScroll}>
                    <ImagePicker image={props.art.image} onImagePicked={setArtImage} />
                    <TextInput
                        opacity={0.7}
                        value={props.values.name}
                        style={styles.longFormInput}
                        placeholder='Name'
                        onChangeText={text => { props.setFieldValue('name', text) }}
                    />
                    <Text style={styles.validationText}> {props.errors.name}</Text>
                    <TextInput
                        opacity={0.7}
                        value={props.values.description}
                        style={styles.longFormInput}
                        placeholder='Description'
                        onChangeText={text => { props.setFieldValue('description', text) }}
                    />
                    <Text style={styles.validationText}> {props.errors.description}</Text>

                    <TextInput
                        opacity={0.7}
                        value={props.values.artist}
                        style={styles.longFormInput}
                        placeholder='Artist name'
                        onChangeText={text => { props.setFieldValue('artist', text) }}
                    />
                    <Text style={styles.validationText}> {props.errors.artist}</Text>


                    <View style={styles.selectorSize}>
                        <NumberPlease
                            digits={sizeNumber}
                            values={props.values.width}
                            onChange={(values) => { props.setFieldValue('width', value) }}
                        />
                        <NumberPlease
                            digits={sizeNumber}
                            values={props.values.height}
                            onChange={(values) => { props.setFieldValue('height', value) }}
                        />

                    </View>
                    <Button
                        containerStyles={{ backgroundColor: '#E59EAA' }}
                        text='Submit'
                        onPress={() => props.handleSubmit()}
                    />
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
        h
    },
    selectorSize: {
        flexDirection: "row",
        marginLeft: 5,
        justifyContent: 'space-evenly'


    },
    containerScroll: {
        width: '100%'
    },
    size: {
        borderColor: '#13405e'
    },
    container: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',

    },
    formInput: {
        borderColor: '#B5B4BC',
        borderWidth: 1,
        padding: 8,
        height: 50,
        color: '#13405e',
        width: '75%',
        marginBottom: 16,
        marginTop: 16
    },
    validationText: {
        color: 'red',
        alignSelf: 'center'
    },
    longFormInput: {
        width: '80%',
        alignSelf: 'center',
        height: 50,
        color: '#13405e',
        borderColor: '#13405e',
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: '#E2E2E1',
        padding: 8,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%'
    },
});

export default withFormik({
    mapPropsToValues: ({ art }) => ({
        name: art.name,
        description: art.description,
        width: art.width,
        height: art.height,
        artist: art.artist,
        imageUri: null
    }),
    enableReinitialize: true,
    validationSchema: (props) => yup.object().shape({
        name: yup.string().max(30).required(),
        description: yup.string().max(50).required()
    }),
    handleSubmit: (values, { props }) => {
        console.log(props);



        console.log(values);

        if (props.art.id) {
            values.id = props.art.id;
            values.createdAt = props.art.createdAt;
            values.width = props.art.width;
            values.height = props.art.height;
            values.artist = props.art.artist;
            values.image = props.art.image;
            uploadArt(values, props.onArtUpdated, { updating: true });
        } else {
            uploadArt(values, props.onArtAdded, { updating: false });
        }
    },
})(ArtForm);