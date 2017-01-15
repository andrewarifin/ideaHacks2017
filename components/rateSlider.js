import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Stylesheet,
  Text,
  Slider
} from 'react-native'


export default class RateSlider extends Component {
  constructor () {
    super();
    this.state = {value: 6000}
  }

  onValueChange = value => {
    this.setState({
      value: value
    });
    this.props.setPulseRate(value)
  }

  render() {
    return (
      <View style={{width: 250}}>
        <Slider
          minimumValue={2000}
          maximumValue={10000}
          step={1}
          minimumTrackTintColor={this.props.sliderColor}
          maximumTrackTintColor='#EAEAEA'
          value={this.state.value}
          onValueChange={this.onValueChange.bind(this)} />
      </View>
    )
  }
}

AppRegistry.registerComponent('RateSlider', () => RateSlider);
