import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import EligiblePlayersItem from './EligiblePlayersItem';
import { Button } from './Common';
import { socketEvent } from '../../redux/actions';

class EligiblePlayers extends Component {

  state = {
    currentlySelected: undefined
  }

  onNominateChancellor = () => {
    const playerId = this.state.currentlySelected.user.id;
    if(this.state.currentlySelected !== undefined) {
      this.props.socketEvent({
        type: 'suggestChancellor',
        payload: {
          gameId: this.props.game.id,
          playerId: playerId
        }
      });
      this.props.navigation.navigate('JaNeinVote');
    }
  };

  startGame = () => {
    this.props.socketEvent({
      type: 'startGame',
      payload: {
        gameId: this.props.game.id
      }
    })
    this.props.navigation.navigate('MainBoard');
  }

  onPlayerPress = ({chancellor, executed, hitler, id, president, user}) => {
    this.setState({
      currentlySelected: {chancellor, executed, hitler, id, president, user}
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

  renderEligiblePlayers() {
    return this.props.players.map((player) =>
      <EligiblePlayersItem
        key={player.id}
        player={player}
        onPress={this.onPlayerPress.bind(this)}

      />
    );
  }

  render() {
    return (
      <View style={styles.containerStyle} >
        {this.renderSelectedPlayer()}
        <ScrollView horizontal contentContainerStyle={styles.itemStyle} >
          {this.renderEligiblePlayers()}
        </ScrollView>
        <View style={styles.buttonContainerStyle} >
          <Button style={styles.buttonStyle} onPress={this.onNominateChancellor} >
            Be My Chancellor!
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
  itemStyle: {
    alignItems: 'center'
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
    margin: '10%',
    borderRadius: 0
  }
};

const mapStateToProps = (state) => ({
  game: state.game,
  players: state.game.playerList
});

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (data) => dispatch(socketEvent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EligiblePlayers);
