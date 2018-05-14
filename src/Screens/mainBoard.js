import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import ElectionTracker from '../Components/electionTracker';
import Board from '../Components/board';
//import Drawer from 'react-native-drawer'

class MainBoard extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  toggleTracker = () => {
    this.drawer.open();
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
        <TouchableOpacity onTrackerPress={this.toggleTracker} style={styles.electionTracker}>
          <ElectionTracker/>
        </TouchableOpacity>
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

const mapStateToProps = (state) => ({
  game: state.gameReducer.player
})

export default connect(mapStateToProps, null)(MainBoard);

// <View style={styles.electionTracker}>
//   <ElectionTracker />
// </View>
