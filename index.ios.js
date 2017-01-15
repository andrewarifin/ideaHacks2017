import * as firebase from 'firebase';

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
import ColorPicker from './components/colorPicker.js'
import RateSlider from './components/rateSlider.js'

const Pulse = require('react-native-pulse');

const firebaseConfig = {
  
}

export default class Breathe extends Component {
  constructor() {
    super();
    this.animatedValue1 = new Animated.Value(0)
    this.state = {
      ringColor: '#90C2FC',
      sliderColor: '#90C2FC',
      pulseRate: 8000
    }

    this.redPress = this.redPress.bind(this);
    this.orangePress = this.orangePress.bind(this);
    this.greenPress = this.greenPress.bind(this);
    this.bluePress = this.bluePress.bind(this);
    this.purplePress = this.purplePress.bind(this);
  };

  redPress = () => {
    this.setState({
      ringColor: '#D65656', 
      sliderColor: '#D65656'
    });

  };

  orangePress = () => {
    this.setState({
      ringColor: '#FFD081',
      sliderColor: '#FFD081'
    });
  };

  greenPress = () => {
    this.setState({
      ringColor: '#B8E986',
      sliderColor: '#B8E986'
    });
  };

  bluePress = () => {
    this.setState({
      ringColor: '#90C2FC',
      sliderColor: '#90C2FC'
    });
  };

  purplePress = () => {
    this.setState({
      ringColor: '#BD71FF',
      sliderColor: '#BD71FF'
    });
  };

  setPulseRate = (rate) => {
    this.setState({
      pulseRate: rate
    });
  }

  componentDidMount() {
    this.animate()
  }
  animate () {
    this.animatedValue1.setValue(0)
    Animated.timing(
      this.animatedValue1,
      {
        toValue: 1,
        duration: this.state.pulseRate,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  };
  render() {
    const opacity = this.animatedValue1.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.25, 1, 0.25]
    })
    const size = this.animatedValue1.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.2, 1]
    })
  return (
    <View style = {{backgroundColor: '#36393B', flex: 1, alignItems: 'center'}} >
      <Animated.View style={styles.container}>
        <Animated.Image
          style={{
            opacity,
            transform: [{scale: size}],
            width: 275,
            height: 275,
            marginTop: 100,
            tintColor: this.state.ringColor
            }}
          source={require('./public/images/ring.png')}
        />
      </Animated.View>
      <ColorPicker 
        redPress = {color => this.redPress(color)}
        orangePress = {color => this.orangePress(color)}
        greenPress = {color => this.greenPress(color)}
        bluePress = {color => this.bluePress(color)}
        purplePress = {color => this.purplePress(color)}
      />
      <View style={styles.sliderContainer}>
        <Image 
          style={{width: 30, height: 15, marginRight: 10}} 
          source = {require('./public/images/wind.png')}
        />
        <RateSlider
          setPulseRate = {this.setPulseRate}
          sliderColor = {this.state.sliderColor}
        />
        <Image 
          style={{width: 50, height: 25, marginLeft: 10}} 
          source = {require('./public/images/wind.png')}
        />
      </View>
      <Image 
          style={{marginTop: 25, width: 100, height: 100, tintColor: 'white'}} 
          source = {require('./public/images/logo.png')}
        />
    </View>
  )}
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
  sliderContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  }
})

AppRegistry.registerComponent('Breathe', () => Breathe);
