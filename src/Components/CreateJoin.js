import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';
import { Text } from 'react-native';
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
        <Text style={{ textAlign: 'center', flex: 1 }} >
          What would you like to do, {this.props.user.name}?
        </Text>
      </CardSection>
    );
  }

  render () {
    return (
        <Card>
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
        </Card>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  game: state.game
})


const mapDispatchToProps = (dispatch) => {
  return {
    socketEvent: (data) => dispatch(socketEvent(data)),
    createGame: (game) => dispatch(createGame(game))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJoin);
