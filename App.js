import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import socket from './redux/middleware'
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




export default class App extends React.Component {

  render() {
    const MainNavigator = createBottomTabNavigator({
      Login: { screen: CreateUser },
      CreateJoin: { screen: CreateJoin },
      CreateOrJoin: {
        screen: createBottomTabNavigator({
          Create: { screen: CreateRoom },
          Join: { screen: JoinRoom },
          Waiting: { screen: WaitingRoom },
          UserIntro: { screen: UserIntro },
          MainBoard : { screen: MainBoard },
          VoteOnChancellor : { screen: VoteOnChancellor },
        },
      JaNeinVote: {screen: JaNeinVote},
      MainBoard : { screen: MainBoard },
        {
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
      <Provider store={createStore(reducers, applyMiddleware(logger, socket('http://localhost:3000')))}>
        <MainNavigator />
      </Provider>
      );
    }
  }
