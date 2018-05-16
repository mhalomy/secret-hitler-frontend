import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const EligiblePlayersItem = (props) => {
  const { chancellor, executed, hitler, id, president, user } = props.player;

  renderPlayers = () => {
    if (!president && !executed) {
      return (
        <TouchableOpacity style={styles.imageContainer} onPress={props.onPress.bind(this, props.player)} >
          <Avatar
            rounded
            xlarge
            resize="contain"
            source={{uri: props.player.user.avatar}}
          />
          <Text style={styles.textStyle} >
            {props.player.user.name}
          </Text>
        </TouchableOpacity>
      );
    }
  };

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
};

export default EligiblePlayersItem;