import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

const PlayerListItem = ({ player }) => {
  const { chancellor, executed, hitler, id, president, user } = player;

  renderPresident = () => {
    if (president) {
      return (
        <Text style={styles.rankTextStyle}>
          President
        </Text>
      );
    }
  }

  renderChancellor = () => {
    if (chancellor) {
      return (
      <Text style={styles.rankTextStyle}>
      Chancellor
      </Text>
      );
    }
  }
  return (
    <View style={styles.containerStyle} >
      <View>
        <Avatar
          rounded
          medium
          resizeMode="contain"
          source={{ uri: user.avatar }}
          overlayContainerStyle={{backgroundColor: 'white'}}
        />
      </View>
      <View style={styles.textContainerStyle}>
        <Text style={styles.textStyle}>
          {user.name}
        </Text>
        {this.renderPresident()}
        {this.renderChancellor()}
      </View>
    </View>
  );
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2d2c2c',
    padding: 5,
    borderBottomWidth: 1
  },
  textContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5
  },
  textStyle: {
    fontSize: 18,
    color: '#ddddbe'
  },
  rankTextStyle: {
    color: '#a85f15'
  }
}

export default PlayerListItem;
