import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

class Notification extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.notification}>
        <Text> HELLO </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notification: {
    backgroundColor: '#958247',
    width: '100%',
    opacity: 0.6,
  },
})


const mapStateToProps = (state) => ({
  game: state.gameReducer,
})

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (message, payload) => dispatch(socketEvent(message, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
