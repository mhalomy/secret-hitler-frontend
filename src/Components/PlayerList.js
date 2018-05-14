import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {

  renderPlayerList() {
    return this.props.playerList.map((player) =>
      <PlayerListItem key={player.id} player={player} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderPlayerList()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return state.playerListReducer;
}

export default connect(mapStateToProps, {})(PlayerList);