import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
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
      <View style={styles.containerStyle} >
        <ScrollView horizontal contentContainerStyle={styles.itemStyle} >
          {this.renderEligiblePlayers()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'center'
  },
  itemStyle: {
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => {
  return state.playerListReducer;
}

export default connect(mapStateToProps, {})(EligiblePlayers);