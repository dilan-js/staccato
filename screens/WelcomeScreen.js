import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.outer}>
      </View>
      <View style={styles.inner}>
        <Image style={styles.logo} source={require('./logo.png')}/>
        <Text style={styles.welcome}>Welcome to Staccato!</Text>
      </View>
      <View style={styles.outer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {navigation.navigate('GenreScreen')}}
        >
          <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#121212',
    flex: 1,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 192,
    width: 128,
  },
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flex: 1.25,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    width: windowWidth * (2/3),
  },
  button: {
    alignContent: 'center',

  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#C4C4C4',
    textAlign: 'center'
  }
});
