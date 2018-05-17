import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import socket from './redux/middleware';
import logger from 'redux-logger';
import CreateRoom from './src/Components/CreateRoom';
import JoinRoom from './src/Components/JoinRoom';
import CreateJoin from './src/Components/CreateJoin';
import CreateUser from './src/Components/CreateUser';
import JaNeinVote from './src/Components/JaNeinVote';
import UserIntro from './src/Screens/UserIntro';
import MainBoard from './src/Screens/mainBoard';
import { createBottomTabNavigator } from 'react-navigation';
import reducers from './redux/reducers';
import WaitingRoom from './src/Screens/WaitingRoom';
import PresidentVeto from './src/Components/PresidentVetoChoice';
import VoteOnChancellor from './src/Screens/VoteOnChancellor';
import NominateChancellor from './src/Screens/NominateChancellor';
import ExecutePlayer from './src/Screens/ExecutePlayer';
import Notification from './src/Components/notification';

import ShowPresident from './src/Screens/ShowPresident';


export default class App extends React.Component {

  render() {
    const MainNavigator = createBottomTabNavigator({
      Login: { screen: CreateUser },
      CreateJoin: { screen: CreateJoin },
      Create: { screen: CreateRoom },
      Join: { screen: JoinRoom },
      Waiting: { screen: WaitingRoom },
      UserIntro: { screen: UserIntro },
      VoteOnChancellor : { screen: VoteOnChancellor },
      JaNeinVote: {screen: JaNeinVote},
      MainBoard : { screen: MainBoard },
      NominateChancellor: { screen: NominateChancellor },
      ExecutePlayer: { screen: ExecutePlayer },
      ShowPresident: { screen: ShowPresident }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    // const DrawerNavigation = createDrawerNavigator({
    //   MainBoard: { screen: MainBoard },
    //   Notification: {screen: Notification}
    // })


    return (
      <Provider store={createStore(reducers, applyMiddleware(logger, socket('http://192.168.1.165:3000')))}>
        <MainNavigator />
      </Provider>
      );
    }
  }
