import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Test from './src/test';
import logger from 'redux-logger';
import CreateRoom from './src/Components/CreateRoom';
import JoinRoom from './src/Components/JoinRoom';
import CreateJoin from './src/Components/CreateJoin';
import CreateUser from './src/Components/CreateUser';
import { createBottomTabNavigator } from 'react-navigation';
import WaitingRoom from './src/Screens/WaitingRoom';
import reducers from './redux/reducers';

export default class App extends React.Component {

  render() {

    const MainNavigator = createBottomTabNavigator({
      Login: { screen: CreateUser },
      CreateJoin: { screen: CreateJoin },
      CreateOrJoin: {
        screen: createBottomTabNavigator({
          Create: { screen: CreateRoom },
          Join: { screen: JoinRoom },
          Waiting: { screen: WaitingRoom }
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

    const store = createStore(reducers);

    return (
      <Provider store={createStore(reducers, applyMiddleware(logger))}>
        <MainNavigator />
      </Provider>
      );
    }
  }
