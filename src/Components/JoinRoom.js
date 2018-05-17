import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { socketEvent } from '../../redux/actions/socket.actions';

class JoinRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {gameId: ''}
  }

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  onJoinClick = () => {
    this.props.socketEvent({
      type: 'joinGame',
      payload: {
        user: this.props.user,
        gameId: this.state.gameId
      }
    })
    this.props.navigation.navigate('Waiting');
  }

  render () {
    return (
        <Card>
          <HomeImage />
          <CardSection style={styles.textInputContainerStyle}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Enter your GameID"
              autoCorrect={false}
              onChangeText={(gameId) => this.setState({gameId})}
            />
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

const styles = {
  textInputStyle: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    marginLeft: 50,
    marginRight: 50,
    height: 50,
    textAlign: 'center'
  },
  textInputContainerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  game: state.game
})



const mapDispatchToProps = (dispatch) => ({
  socketEvent: (data) => dispatch(socketEvent(data)),
  createGame: (game) => dispatch(createGame(game))
})

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoom);
