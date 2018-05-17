import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, Alert, Button} from 'react-native';
import ElectionTracker from '../Components/electionTracker';
import Board from '../Components/board';
import Drawer from 'react-native-drawer';
import Notification from '../Components/notification';
import { DrawerNavigator } from 'react-navigation';
import { socketEvent } from '../../redux/actions/socket.actions';
import PlayerList from '../Components/PlayerList';
import ChancellorPolicies from '../Components/ChancellorPolicies';
import PresidentPolicies from '../Components/PresidentPolicies';
import ShowPresident from './ShowPresident';

class WaitingBoard extends Component {
  constructor (props) {
    super(props);
    this.state = {drawerOpen: null, turnCount: 0, userId: this.props.userId, modalVisible: false, eligiblePoliciesNumber: this.getNumberOfEligiblePolicies()};
  };

  componentDidMount () {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);

  }

  renderElectionTracker = () => {
    return (
      <TouchableOpacity onTrackerPress={this.toggleTracker} style={styles.electionTracker}>
        <ElectionTracker/>
      </TouchableOpacity>
    )
  }

  getNumberOfEligiblePolicies = () => {
    return this.props.game.eligiblePolicies.length;
  }

  goToExecutivePhaseButton = () => {
    if (this.state.eligiblePolicies === 3) {
      this.props.players.filter(player => {
        if ((this.props.user.id === player.id) && player.president) {
          return <Button
            title='Click to vote'
            navigation={this.props.navigation}
            onPress={this.goToVotingScreen}
          />
        }
      })
    } else if (this.state.eligiblePolicies === 2) {
      this.props.players.filter(player => {
        if ((this.props.user.id === player.id) && player.chancellor) {
          return <Button
            title='Click to vote'
            navigation={this.props.navigation}
            onPress={this.goToVotingScreen}
          />
        }
      })
    } else {
      return <Text> Wait in suspense while the Government selects their Policies </Text>
    }
  }

  goToVotingScreen = () => {
    this.props.players.filter(player => {
      if ((this.props.user.id === player.id) && player.president) {
        this.props.navigation.navigate('ChancellorPolicies')
      } else if ((this.props.user.id === player.id) && player.chancellor) {
        this.props.navigation.navigate('ChancellorPolicies')
      }
    })
  }

  renderMainContent = () => {
    if(!this.state.drawerOpen) {
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
        </View>
      )
    } else {
        return (
          <View style={styles.mainBoardContainer}>
            <View>
              <PlayerList style={styles.electionTracker}/>
            </View>
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

  // Socket actions occuring on the main Board
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.turnCount > prevState.turnCount) {
  //     handlePresidentChange();
  //   } else {
  //     return prevState;
  //   }
  // }

  render() {
    return (
      <Drawer
        open={this.state.drawerOpen}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        onClose={() => {
          this.setState({drawerOpen: false});
        }}
        panOpenMask={0.80}
        captureGestures="open"
        acceptPan={false}>
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setState({drawerOpen: true});
          }}>
          <Button
            title='NOTIFICATIONS'
            onPress={this.renderPresidentScreen}
          />
          <View>
          {this.renderMainContent()}
          </View>
          </TouchableOpacity>
        </View>
      </Drawer>
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

  closedDrawerMessage: {
    alignSelf: 'center',
    flex: 0.5,
    width: '0%',
  },

  notification: {
    height: '20%',
    backgroundColor: 'purple',
  }
})

const mapStateToProps = (state) => ({
  game: state.game,
  players: state.game.playerList,
  userId: state.user.id
})

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (data) => dispatch(socketEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Waitingboard);
