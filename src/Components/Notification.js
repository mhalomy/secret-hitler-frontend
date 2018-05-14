import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Notification extends Component {
  render() {
    return (
      <View>
        <Text style={styles.notificationTextStyle} >
          Notification here
        </Text>
      </View>
    );
  }
}

const styles = {
  notificationTextStyle: {
    textAlign: 'center'
  }
}