import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { startGame } from '../../redux/actions/gameActions';

class PresidentVeto extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

<<<<<<< HEAD
  acceptVeto = () => {
    console.log('I ACCEPT!', this.props);
    const { app, user } = this.props;
    this.props.socketEvent('givePresidentChanceToConfirmVeto', {playerId: user.id, gameId: app.gameId, veto:true});
  }

  rejectVeto = () => {
    const { app, user } = this.props;
    this.props.socketEvent('givePresidentChanceToConfirmVeto', {playerId: user.id, gameId: app.gameId, veto:false});
  }

  render() {
    return (
      <View style={styles.voteContainer}>
        <TouchableOpacity value='accept' onPress={this.acceptVeto} style={styles.vote}>
          <Text style={styles.text}> I agree to the veto. </Text>
        </TouchableOpacity>
        <TouchableOpacity value='abstain' onPress={this.rejectVeto} style={styles.vote}>
=======
  handleVote = (event) => {
    const { app, user } = this.props;
    this.props.socketEvent('agreeToVetoPolicy', {user, payload: event.target.className});
  };

  render() {
    return (
      <View style={styles.voteContainer} onPress={this.handleVote}>
        <TouchableOpacity className='accept' style={styles.vote}>
          <Text style={styles.text}> I agree to the veto </Text>
        </TouchableOpacity>
        <TouchableOpacity className='abstain' onPress={this.handleVote} style={styles.vote}>
>>>>>>> 58b32af59d17ab411d71872cc702a61a33031304
          <Text style={styles.text}> Nope, I disagree. </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  voteContainer: {
    display: 'flex',
    flexDirection: 'row',
<<<<<<< HEAD
    backgroundColor: '#8B4513',
=======
    backgroundColor: 'red',
>>>>>>> 58b32af59d17ab411d71872cc702a61a33031304
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  vote: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    backgroundColor: '#CD5C5C',
=======
    backgroundColor: 'yellow',
>>>>>>> 58b32af59d17ab411d71872cc702a61a33031304
    height: '70%',
    width: '100%',
    margin: '2%',
  },

  text: {
    fontSize: 40,
    margin: '5%',
  }
})

const mapStateToProps = (state) => {
  return {
    app: state.app,
    user: state.user,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (message, payload) => dispatch(socketEvent(message, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PresidentVeto);
