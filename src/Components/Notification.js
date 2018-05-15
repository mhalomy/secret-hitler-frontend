import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.containerStyle} >
        <Text style={styles.notificationTextStyle} >
          Time to nominate a chancellor!
        </Text>
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