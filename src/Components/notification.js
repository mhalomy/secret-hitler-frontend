import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import ShowPresident from './notification';

class Notification extends Component {
  constructor (props) {
    super(props)
  }

  static navigationOptions = {
    drawerLabel: 'Notification',
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} title='Back to the game!' style={styles.notification}>

      </TouchableOpacity>
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
  game: state.game,
})

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (data) => dispatch(socketEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
