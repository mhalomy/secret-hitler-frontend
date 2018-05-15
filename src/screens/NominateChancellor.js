import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EligiblePlayers from '../Components/EligiblePlayers';
import { Button } from '../Components/Common';

export default class NominateChancellor extends Component {
  render() {
    return (
      <View>
        <View style={styles.notificationContainerStyle} >
          <Text style={styles.notificationTextStyle} >
            Time to nominate a chancellor!
          </Text>
        </View>
        <View style={styles.playersContainerStyle} >
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
  notificationContainerStyle: {
    backgroundColor: '#f2f09f',
    display: 'flex'
  },
  playersContainerStyle: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#3d302d',
    justifyContent: 'center'
  }
}