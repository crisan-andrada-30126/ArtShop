import auth from '@react-native-firebase/auth'

export default class FirebaseUtils {
    public static signIn = (email: string, password: string) => {
        console.warn("LOGIN",email)
        return auth().signInWithEmailAndPassword(email, password);
    };


    public static signUp = (email: string, password: string) => {
        console.warn("SIGNUP",email)
        const statusSignup= auth().createUserWithEmailAndPassword(email, password);
        return statusSignup;
    };

    public static signOut = () => {
        return auth().signOut();
    };
}