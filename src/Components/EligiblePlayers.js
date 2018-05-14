import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-elements';
import EligiblePlayersItem from './EligiblePlayersItem';

class EligiblePlayers extends Component {

  renderEligiblePlayers() {
    return this.props.playerList.map((player) =>
      <EligiblePlayersItem key={player.id} player={player} />
    );
  }

  render() {
    return (
      <View>
        {this.renderEligiblePlayers()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state.playerListReducer;
}

export default connect(mapStateToProps, {})(EligiblePlayers);