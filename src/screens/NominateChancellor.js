import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Notification from '../Components/Notification';

export default class NominateChancellor extends Component {
  render() {
    return (
      <View>
        <View>
          <Notification />
        </View>
        <View>
          <Text>
            nominateChancellor
          </Text>
        </View>
      </View>
    );
  }
}