import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    useWindowDimensions,
} from 'react-native'
import React, { useState, useCallback } from 'react'


const ImageCarousel = ({ images }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;

    const onFlatListUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
    }, []);

    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image
                        style={[styles.image, { width: windowWidth - 40 }]}
                        source={item} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,

                }}
                onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dots}>
                {
                    images.map((iamge, index) => (
                        <View key={index} style={[
                            styles.dot,
                            {
                                backgroundColor: index == activeIndex ? '#999999' : '#ededed'
                            }
                        ]} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    },
    image: {
        height: 270,
        margin: 10,
        resizeMode: 'contain',
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#999999',
        margin: 5,
        backgroundColor: '#ededed'
    }
})

export default ImageCarousel