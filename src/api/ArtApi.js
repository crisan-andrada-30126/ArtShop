import firebase from "@react-native-firebase/app";

export function uploadArt(art, onArtUploaded, { updating }) {

    if (art.imageUri) {
        const fileExtension = art.imageUri.split('.').pop();

    }
}

export function addArt(art, addComplete) {
    art.createAt = firebase.firestore.FieldValue.serverTimestamp();

    firebase.firestore().collection('Artworks')
        .add(art)
        .then((snapshot) => {
            art.id = snapshot.id;
            snapshot.set(art);
        }).then(() => addCompleted(art))
        .catch((error) => console.log(error));
} 