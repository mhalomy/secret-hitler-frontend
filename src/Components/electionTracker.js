import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button  } from 'react-native';



export default class ElectionTracker extends Component {
  constructor (props) {
    super(props)
  }

  renderTrackers = () => {
    const trackers = [];
    for (let i = 0; i < 4; i++) {
      trackers.push(<Image key={i} source={require('../assets/board/trackerCircle.png')} width={'100%'} flex={0.5} margin={'5%'}/>)
    }
    return trackers;
  }

  render () {
    return (
      <View style={styles.electionTracker}>
        {this.renderTrackers()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  electionTracker: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginRight: 15,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100/2,
    backgroundColor: 'orange',
    borderStyle: 'solid',
    margin: '15%',
  }
});
