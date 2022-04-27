import firebase from "@react-native-firebase/app";
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export function uploadArt(art, onArtUploaded, { updating }) {

    if (art.imageUri) {
        const fileExtension = art.imageUri.split('.').pop();

        var uuid = uuidv4();

        const fileName = `${uuid}.${fileExtension}`;
        var storageRef = firebase.storage().ref(`artworks/images/${fileName}`)
        storageRef.putFile(art.imageUri)
            .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                snapshot => {
                    console.log("snapshot: " + snapshot.state);
                    console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                    // if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
                    //     console.log("Success");
                    // }
                },
                error => {
                    unsubscribe();
                    console.log("image upload error: " + error.toString());
                },
                () => {
                    storageRef.getDownloadURL()
                        .then((downloadUrl) => {
                            console.log("File available at: " + downloadUrl);

                            art.image = downloadUrl;

                            delete art.imageUri;

                            if (updating) {
                                //    console.log("Updating....");
                                updateArt(art, onArtUploaded);
                            } else {
                                //  console.log("adding...");
                                addArt(art, onArtUploaded);
                            }
                        })
                }
            )

    } else {
        console.log("no  image upload");
        if (updating) {
            //console.log("Updating....");
            updateArt(art, onArtUploaded);
        } else {
            console.log("you must have an  image upload");
        }
    }
}

export function updateArt(art, updateComplete) {
    food.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    console.log("Updating art in firebase");

    firebase.firestore()
        .collection('Artworks')
        .doc(art.id).set(art)
        .then(() => updateComplete(art))
        .catch((error) => console.log(error));
}

export function addArt(art, addCompleted) {
    art.createAt = firebase.firestore.FieldValue.serverTimestamp();

    firebase.firestore().collection('Artworks')
        .add(art)
        .then((snapshot) => {
            art.id = snapshot.id;
            snapshot.set(art);
        }).then(() => {
            addCompleted(art)
            console.alert("SUCCES")
        })
        .catch((error) => console.log('Eroare add', error));
} 