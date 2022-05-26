import firebase from "@react-native-firebase/app";
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


const cartCollection = firestore().collection('Cart');

export function addToCart(userId, artId, time) {

    const item = {
        userId: userId,
        artId: artId,
        createdAt: time,
    }

    firebase.firestore().collection('Cart')
        .add(item)
        .then((snapshot) => {

            item.id = snapshot.id;
            snapshot.set(item);
        }).then(() => {
            console.log("SUCCES")
            alert("Succesfully added. Check the shopping cart")
        })
        .catch((error) => console.log('Eroare add', error));


}

export function removeFromCart(id) {
    firebase.firestore().collection("Cart").doc(id).delete()
}
