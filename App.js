import React from 'react';
<<<<<<< HEAD
import { View } from 'react-native';
import UserIntro from './src/screens/UserIntro';
=======
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from './redux/reducers';
>>>>>>> develop

export default class App extends React.Component {
  render() {
    const store = createStore(reducers);
    return (
<<<<<<< HEAD
      <UserIntro/>
    )
=======
      <Provider store={createStore(reducers, applyMiddleware(logger))}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
>>>>>>> develop
  }
}