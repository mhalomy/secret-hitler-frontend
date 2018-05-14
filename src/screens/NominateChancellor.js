import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Notification from '../Components/Notification';
import EligiblePlayers from '../Components/EligiblePlayers';

export default class NominateChancellor extends Component {
  render() {
    return (
      <View>
        <View>
          <Notification />
        </View>
        <View>
          <EligiblePlayers />
        </View>
      </View>
    );
  }
}