// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type { Node } from 'react';
// import HomeScreen from './src/screens/HomeScreen';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   ImageBackground,
// } from 'react-native';
// import Background from './src/images/paintBlue.jpg'

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';
// import ProductScreen from './src/screens/ProductScreen';
// import Routes from './src/login/Routes';
// import Router from './src/router';



// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };


//   return (

//     <View style={{ flef: 1, alignItems: 'center', justifyContent: 'center', height: '100%', }}>
//       <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
//         <Router />

//       </ImageBackground>
//     </View>


//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//     width: '100%'
//   },
// });


// export default App;
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
// import {
//   ViroARScene,

//   ViroTrackingStateConstants,
//   ViroARSceneNavigator,
// } from '@viro-community/react-viro';
import HomeScreen from './src/screens/HomeScreen';
import { ViroARScene } from '@viro-community/react-viro/dist/components/AR/ViroARScene';
import { ViroTrackingStateConstants } from '@viro-community/react-viro/dist/components/ViroConstants';
import { ViroARSceneNavigator } from '@viro-community/react-viro/dist/components/AR/ViroARSceneNavigator';
import { ViroText } from '@viro-community/react-viro/dist/components/ViroText';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');


  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>

  );
};

export default () => {
  const [ok, setOk] = useState(false)
  if (ok) {
    return (
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />
    );
  } else {
    return (
      <View>
        <Button title='press' onPress={() => setOk(true)} />
      </View>
    )
  }
}


var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
