import React from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import CreateUser from './src/Components/CreateUser';
import WaitingScreen from './src/Screens/WaitingScreen';
import CreateRoom from './src/Components/CreateRoom';
import JoinRoom from './src/Components/JoinRoom';
import CreateJoin from './src/Components/CreateJoin';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      Login: { screen: CreateUser },
      CreateJoin: { screen: CreateJoin },
      CreateOrJoin: {
        screen: createBottomTabNavigator({
          Create: { screen: CreateRoom },
          Join: { screen: JoinRoom },
          Waiting: { screen: WaitingScreen }
        }, {
          navigationOptions: {
            tabBarVisible: false
          },
          lazy: true
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
