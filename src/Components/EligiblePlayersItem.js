import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const EligiblePlayersItem = ({ player }) => {
  const { chancellor, executed, hitler, id, president, user } = player;

  renderPlayers = () => {
    if (!president && !executed) {
      return (
        <TouchableOpacity style={styles.imageContainer} >
          <Avatar
            rounded
            xlarge
            resize="contain"
            source={{uri: user.avatar}}
          />
          <Text style={styles.textStyle} >
            {user.name}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View>
      {this.renderPlayers()}
    </View>
  );
}

const styles = {
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
  }
}

export default EligiblePlayersItem;