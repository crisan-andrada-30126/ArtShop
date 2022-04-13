/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import Background from './src/images/paintBlue.jpg'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import database from '@react-native-firebase/database';
import ProductScreen from './src/screens/ProductScreen';
import Routes from './src/login/Routes';
import Router from './src/router';



const reference = database().ref('/Paintings');



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // reference
  //   .on('value', snapshot => {
  //     console.log('User data: ', snapshot.val());
  //   });

  // console.log('it is working');


  return (

    <View style={{ flef: 1, alignItems: 'center', justifyContent: 'center', height: '100%', }}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <Router />

      </ImageBackground>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%'
  },
});

export default App;
