import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EligiblePlayers from '../Components/EligiblePlayers';
import { Button } from '../Components/Common';

export default class NominateChancellor extends Component {
  render() {
    return (
      <View style={styles.containerStyle} >
        <View>
          <Text style={styles.notificationTextStyle} >
            Time to nominate a chancellor!
          </Text>
        </View>
        <View>
          <EligiblePlayers />
        </View>
      </View>
    );
  }
}

const styles = {
  notificationTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#843622',
    fontWeight: '500'
  },
  containerStyle: {
    backgroundColor: '#f2f09f'
  }
}