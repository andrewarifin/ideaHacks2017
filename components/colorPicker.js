import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'

import Button from 'react-native-button'

export default class ColorPicker extends Component {
  constructor() {
    super();
  }

  redPress() {
    this.props.redPress('Red Pressed')
  }

  orangePress() {
    this.props.orangePress('Orange Pressed')
  }

  greenPress() {
    this.props.greenPress('Green Pressed')
  }

  bluePress() {
    this.props.bluePress('Blue Pressed')
  }

  purplePress() {
    this.props.purplePress('Purple Pressed')
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.redPress.bind(this)}
          containerStyle={{height:30, width: 30, borderRadius:4, backgroundColor: '#D65656'}}
        >
        </Button>
        <Button
          onPress={this.orangePress.bind(this)}
          containerStyle={{height:30, width: 30, borderRadius:4, backgroundColor: '#FFD081'}}
        >
        </Button>
        <Button
          onPress={this.greenPress.bind(this)}
          containerStyle={{height:30, width: 30, borderRadius:4, backgroundColor: '#B8E986'}}
        >
        </Button>
        <Button
          onPress={this.bluePress.bind(this)}
          containerStyle={{height:30, width: 30, borderRadius:4, backgroundColor: '#90C2FC'}}
        >
        </Button>
        <Button
          onPress={this.purplePress.bind(this)}
          containerStyle={{height:30, width: 30, borderRadius:4, backgroundColor: '#BD71FF'}}
        >
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36393B',
    width: 349,
    height: 60,
    borderRadius: 5,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('ColorPicker', () => ColorPicker);
