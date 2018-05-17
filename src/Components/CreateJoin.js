import React, { Component } from 'react';
import { CardSection, Button, HomeImage } from './Common';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { createGame } from '../../redux/actions/gameActions';
import { socketEvent } from '../../redux/actions/socket.actions';


class CreateJoin extends Component {

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  onCreateClick = () => {
  this.props.socketEvent({
    type: 'createGame',
    payload: {
      user: this.props.user
    }
   })
   this.props.navigation.navigate('Create');
  }

  onJoinClick = () => {
    this.props.navigation.navigate('Join');
  }

  renderUserName = () => {
    return (
      <CardSection>
        <Text style={{ textAlign: 'center', flex: 1, fontSize: 16, color: 'white' }} >
          What would you like to do, {this.props.user.name}?
        </Text>
      </CardSection>
    );
  }

  render () {
    return (
        <View style={{ flex: 1, backgroundColor: '#4c140d' }} >
          <HomeImage />

          {this.renderUserName()}

          <CardSection>
            <Button onPress={this.onCreateClick}>
              Create
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onJoinClick}>
              Join
            </Button>
          </CardSection>
        </View>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  game: state.game
})


const mapDispatchToProps = (dispatch) => {
  return {
    socketEvent: (message, payload) => dispatch(socketEvent(message, payload)),
    createGame: (game) => dispatch(createGame(game))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJoin);
