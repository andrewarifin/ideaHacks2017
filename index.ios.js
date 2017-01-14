/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';

import Button from 'react-native-button'

const Pulse = require('react-native-pulse');

export default class Breathe extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount() {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }
  render() {
    const opacity = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.25, 1, 0.25]
      })
    const size = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.2, 1]
    })
  return (
    <Animated.View style={styles.container}>
      <Animated.Image
        style={{
          opacity,
          transform: [{scale: size}],
          width: 227,
          height: 200,
          marginTop: 200
          }}
        source={require('./public/images/ring.png')}
      />
    </Animated.View>
  )}
}

class ringView extends Component {
  
};

const onButtonPress = () => {
  console.log('hello')
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  colorButton: {
    color: 'white',
    fontSize: 18
  },
  pulse: {
  }
})

AppRegistry.registerComponent('Breathe', () => Breathe);
