import React from 'react';
import { View, Text } from 'react-native';

const PlayerListItem = ({ player }) => {
  const { chancellor, executed, hitler, id, president, user } = player;
  return (
    <View>
      <Text style={{fontSize: 18}} >
        {user.name}
      </Text>
    </View>
  );
}

export default PlayerListItem;