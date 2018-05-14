import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const EligiblePlayersItem = ({ player }) => {
  const { chancellor, executed, hitler, id, president, user } = player;

  renderPlayers = () => {
    if (!president && !executed) {
      return (
        <View>
          <Avatar
            rounded
            medium
            resize="contain"
            source={{uri: user.avatar}}
          />
          <Text>
            {user.name}
          </Text>
        </View>
      );
    }
  }

  return (
    <View>
      {this.renderPlayers()}
    </View>
  );
}

export default EligiblePlayersItem;