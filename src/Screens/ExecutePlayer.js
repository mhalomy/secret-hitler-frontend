import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button } from '../Components/Common';
import { socketEvent } from '../../redux/actions';

class ExecutePlayer extends Component {

  state = {
    currentlySelected: undefined
  };

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  onExecutePlayer = () => {
    const playerId = this.state.currentlySelected.user.id;
    if(this.state.currentlySelected !== undefined) {
      this.props.socketEvent({
        type: 'executePlayer',
        payload: {
          gameId: this.props.game.id,
          playerId: playerId
        }
      });
      // this.props.navigation.navigate('')
    }
  };

  onPlayerPress = ({user}) => {
    this.setState({
      currentlySelected: {user}
    });
  };

  renderPlayers = () => {
    return this.props.players.map((player) => {
      if (!player.executed && !player.president) {
        return (
          <TouchableOpacity key={player.user.id} onPress={this.onPlayerPress.bind(this, player)} style={styles.imageContainer} >
            <Avatar
              rounded
              xlarge
              resize="contain"
              source={{uri: player.user.avatar}}
            />
            <Text style={styles.textStyle} >
              {player.user.name}
            </Text>
          </TouchableOpacity>
        );
      }
    });
  };

  renderSelectedPlayer = () => {
    if (this.state.currentlySelected !== undefined) {
      return (
        <View style={styles.questionContainerStyle} >
          <Text style={styles.questionTextStyle} >
            Will it be {this.state.currentlySelected.user.name}?
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.containerStyle} >
        <View style={styles.notificationContainerStyle} >
          <Text style={styles.notificationTextStyle} >
            You have the power, President. Who do you want dead?
          </Text>
        </View>
        {this.renderSelectedPlayer()}
        <ScrollView horizontal contentContainerStyle={styles.itemStyle} >
          {this.renderPlayers()}
        </ScrollView>
        <View style={styles.buttonContainerStyle} >
          <Button style={styles.buttonStyle} onPress={this.onExecutePlayer} >
            You're Dead! >:-)
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#3d302d'
  },
  notificationTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#843622',
    fontWeight: '500'
  },
  notificationContainerStyle: {
    backgroundColor: '#f2f09f'
  },
  itemStyle: {
    alignItems: 'center'
  },
  imageContainer: {
    margin: 5,
    padding: 7,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#3d302d'
  },
  questionTextStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  questionContainerStyle: {
    padding: 5
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    backgroundColor: '#3d302d',
    paddingBottom: 5
  },
  buttonStyle: {
    margin: 10,
    borderRadius: 0
  }
};

const mapStateToProps = (state) => ({
  game: state.gameReducer,
  players: state.gameReducer.playerList
});

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (message, payload) => dispatch(socketEvent(message, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExecutePlayer);