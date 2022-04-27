import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'rgba(226,226,225, 0.8)',
        margin: 10,
        borderRadius: 10,
        height: '97%',
        marginBottom: '5%',
    },
    price: {
        fontSize: 22,
        color: '#13405e',
        fontWeight: 'bold',
        opacity: 1
    },
    description: {
        marginVertical: 10,
        color: '#13405e',
        fontSize: 16,
        lineHeight: 20,
    },
    title: {
        color: '#13405e',
        fontSize: 18,
        fontWeight: 'bold',
    }

})

export default styles;