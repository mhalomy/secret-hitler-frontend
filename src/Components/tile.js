import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Tile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View
        style={{
          borderWidth: 0.5,
          height: '60%',
          backgroundColor: 'transparent',
          width: '14%',
        }}
      >
      </View>
    )
  }
}
