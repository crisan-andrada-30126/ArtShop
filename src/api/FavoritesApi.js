import firebase from "@react-native-firebase/app";
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


const favsCollection = firestore().collection('Artworks');

export function addToFavorites(userId, artId) {
    const favorit = {
        userId: userId,
        artId: artId
    }

    firebase.firestore().collection('Favorites')
        .add(favorit)
        .then((snapshot) => {
            favorit.id = snapshot.id;
            snapshot.set(favorit);
        }).then(() => {
            console.log("SUCCES")
        })
        .catch((error) => console.log('Eroare add', error));
}

export function removeFavorit(id) {
    firebase.firestore().collection("Favorites").doc(id).delete()
}

export function getFavoritesByUserId(userId) {
    var responselist = []
    favsCollection.get().then(querySnapshot => {

        querySnapshot.forEach(documentSnapshot => {
            if (userId == documentSnapshot.data().userId) {
                responselist.push(documentSnapshot.data())
            }

        })


    });

    return responselist;
}