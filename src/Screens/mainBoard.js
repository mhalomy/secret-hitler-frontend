import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import ElectionTracker from '../Components/ElectionTracker';
import Board from '../Components/Board';

export default class MainBoard extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.mainBoardContainer}>
        <View style={styles.allianceBoards}>
          <View style={styles.liberalBoard}>
            <ImageBackground source={require('../assets/board/liberalBoard.png')} style={{flex:1}} >
              <Board className='liberal'/>
            </ImageBackground>
          </View>
          <View style={styles.fascistBoard}>
            <ImageBackground source={require('../assets/board/fascistBoard.png')} style={{flex:1}} >
              <Board className='fascist'/>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.electionTracker}>
          <ElectionTracker />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainBoardContainer : {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  electionTracker: {
    alignSelf: 'center',
    flex: 1,
  },

  allianceBoards: {
    display: 'flex',
    flex: 8,
  },

  liberalBoard : {
    backgroundColor: 'white',
    height: '50%',
  },

  fascistBoard : {
    height: '50%',
    backgroundColor: 'white',
  },
})
