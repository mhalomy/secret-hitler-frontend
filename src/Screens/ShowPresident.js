import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import ElectionTracker from '../Components/electionTracker';
import Board from '../Components/board';
import Drawer from 'react-native-drawer';
import Notification from '../Components/notification';
import { socketEvent } from '../../redux/actions/socket.actions';
import JaNeinVote from '../Components/JaNeinVote';
import NominateChancellor from './NominateChancellor';


class ShowPresident extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: undefined,
      presId: undefined,
      presName: undefined,
    }
  }

  getPresidentId = () => {
    const presidentId = this.props.players.filter(player => {
      if (player.president) {
        return player.id;
      }
    })
    this.setState({
      presId: presidentId
    })
  }

  revealPresident = () => {
    const president = this.props.players.filter(player => {
      if (player.president) {
        return player;
      }
    })
    const presidentId = president[0].id;
    const presidentName = president[0].user.name;

    if (this.props.user.id === presidentId) {
      return <Text> Welcome to the Presidency! </Text>
    } else {
      return <Text> {presidentName} is your President this turn. </Text>
    }
  }


  handleClick = () => {
    this.props.socketEvent({
      type: 'acknowledgePresident',
      payload: {
        gameId: this.props.game.id
      }
    })
    if (this.props.user === this.state.presId) {
      this.props.navigation.navigate('NominateChancellor')
    } else {
      this.props.navigation.navigate('NominateChancellor')
    }
  }

  render () {
    return (
      <View>
        {this.revealPresident()}
      <Button
        navigation={this.props.navigation}
        title="Ready to vote!"
        onPress={this.handleClick}
      />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  game: state.game,
  user: state.user,
  players: state.game.playerList
})

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (data) => dispatch(socketEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowPresident);
