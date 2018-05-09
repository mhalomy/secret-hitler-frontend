import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

const testTips = [
  'Claiming to be liberal is the best way to go',
  'Aim to keep Hitler away from power, particularly as fascist policies accrue',
  'Chuck Norris merges to Master',
  'Just the tip'
]

const playerList = [
  {
    user :
    {
      avatar: "blue",
      id: "ad90cb17-a650-407c-a185-50bab05c8484",
      name: "jack",
    }
  }, {
    user:
    {
      avatar: "red",
      id: "ad90cb17-a650-407c-a185-50bab05c8484",
      name: "jackeline",
    }
  },
  {
    user:
    {
      avatar: "pink",
      id: "ad90cb17-a650-407c-a185-50bab05c8484",
      name: "hitler",
    }
  }
]

class PatientPlayers extends Component {
  constructor (props) {
    super(props)
  }

  renderPlayers = () => {
    let currentPlayers = [];
    if (playerList) {
      for (let i = 0; i < playerList.length; i++) {
        const avatar = playerList[i].user.avatar;
        const name = playerList[i].user.name
        currentPlayers.push(
          <View key={i} style={{backgroundColor: 'transparent', display: 'flex', alignItems:'center',  margin: '3%', width: '100%', padding:'5%'}}>
            <Image source={require('../assets/trump.jpg')} style={{width: '30%', height: '50%'}}/>
            <Text style={{backgroundColor: 'black', fontSize: 18, color: 'white', fontWeight: 'bold', marginBottom: '10%'}}> {name} </Text>
          </View>
        )
      }
    return currentPlayers;
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        {this.renderPlayers()}
      </View>
    )
  }
}

export default class WaitingRoom extends Component {
  constructor (props) {
    super(props)
  }

  renderText = () => {
    if (this.props.playerList.length < 4) {
      return 'Waiting for more players...'
    } else {
      return 'The game awaits, ready?'
    }
  }

  renderTips = () => {
    const randomIndex = Math.floor(Math.random() * testTips.length - 1)
    setInterval(() => {
      return testTips[randomIndex]
    }, 4000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/WaitingRoom/HilterLizzard.png')} style={{flex:1, width:'100%', opacity:0.7}}>

          <View style={styles.playersContainer}>
            <PatientPlayers />
          </View>

          <View style={styles.waitingMessageContainer}>
            <Text style={{fontSize: 42, color: 'red', fontWeight: '900', margin: '5%', width:'100%', height: '100%', textShadowColor: 'black', textShadowOffset: {width: 10, height: 10}, textShadowRadius: 10}}>Waiting for more players</Text>
          </View>


          <View style={styles.tipsContainer}>
            {this.renderTips()}
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: '5%', marginTop: '2%'}}>Tip: Always claim to be liberal </Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  waitingMessageContainer: {
    backgroundColor: 'transparent',
    width: '85%',
    alignSelf: 'flex-start',
    flex: 0.3,
    marginBottom: '3%'
  },

  playersContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    flex: 0.6,
    // alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    padding: '25%',
  },

  tipsContainer: {
    backgroundColor: '#958247',
    width: '100%',
    alignSelf: 'flex-end',
    flex: 0.1,
    opacity: 0.6,
  },


});
