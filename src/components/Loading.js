import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#5C5C9C"
                size="large"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',

    }
})