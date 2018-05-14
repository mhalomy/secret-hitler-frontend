import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { startGame } from '../../redux/actions/gameActions';

class JaNeinVote extends Component {
  constructor (props) {
    super(props)
  }

  handleVote = (event) => {
    console.log('PARTAY')
    const { app, user } = this.props;
    this.props.socketEvent('voteOnChancellor', {user, payload: event.target.className});
    // navigate back to board and see others' votes 
  };

  render() {
    return (
      <View style={styles.voteContainer} onPress={this.handleVote}>
        <TouchableOpacity className='JA' style={styles.vote}>
          <ImageBackground source={require('../assets/JA.png')} style={{flex: 1, width:'100%'}} />
        </TouchableOpacity>
        <TouchableOpacity className='NEIN' onPress={this.handleVote} style={styles.vote}>
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
    app: state.app,
    user: state.user,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (message, payload) => dispatch(socketEvent(message, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JaNeinVote);
