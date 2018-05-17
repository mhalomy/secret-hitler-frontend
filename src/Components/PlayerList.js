import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import PlayerListItem from './PlayerListItem';

class PlayerList extends Component {

  renderPlayerList() {
    return this.props.players.map((player) =>
      <PlayerListItem key={player.user.id} player={player} />
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

const mapStateToProps = (state) => ({
  players: state.game.playerList
})

export default connect(mapStateToProps)(PlayerList);
