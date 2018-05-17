import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { connect } from 'react-redux';
import { socketEvent} from '../../redux/actions/socket.actions';
import MainBoard from '../Screens/mainBoard'

class JaNeinVote extends Component {
  constructor (props) {
    super(props)
  }

  getCurrentPlayerId = () => {
    this.props.players.filter(player => {
      if (player.user.id === this.props.user.id) {
        return player.id;
      }
    })
  }

  handleJaVote = () => {
    this.props.socketEvent({
      type: 'voteOnChancellor',
      payload: {
        gameId: this.props.game.id,
        playerId: this.props.user.id,
        vote: 'ja'
      }
    })
    this.props.navigation.navigate('MainBoard');
  };

  handleNeinVote = () => {
    this.props.socketEvent({
      type: 'voteOnChancellor',
      payload: {
        gameId: this.props.game.id,
        playerId: this.props.user.id,
        vote: 'nein'
      }
    })
    this.props.navigation.navigate('MainBoard');
  };


  render() {
    return (
      <View style={styles.voteContainer}>
        <TouchableOpacity className='JA' style={styles.vote} onPress={this.handleJaVote}>
          <ImageBackground source={require('../assets/JA.png')} style={{flex: 1, width:'100%'}} />
        </TouchableOpacity>
        <TouchableOpacity className='NEIN' onPress={this.handleNeinVote} style={styles.vote}>
          <ImageBackground source={require('../assets/NEIN.png')} style={{flex: 1, width:'100%'}} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  voteContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  vote: {
    flex: 2,
    backgroundColor: 'transparent',
    height: '70%',
    width: '100%',
    margin: '2%',
  }
})

const mapStateToProps = (state) => {
  return {
    game: state.game,
    players: state.game.playerList,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (data) => dispatch(socketEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JaNeinVote);
