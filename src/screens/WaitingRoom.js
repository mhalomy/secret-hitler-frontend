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
      name: "jackTheRipper",
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

  // renderPlayers = () => {
  //   let currentPlayers = [];
  //   if (this.props.playerList) {
  //     for (let i = 0; i < this.props.playerList.length; i++) {
  //       currentPlayers.push(
  //         <View key={i}>
  //           this.props.playerList[i].user.avatar,
  //           <Text>
  //             this.props.playerList[i].user.name,
  //           </Text>
  //         </View>
  //       )
  //     }
  //   return currentPlayers;
  //   }
  // }

  renderPlayers = () => {
    let currentPlayers = [];
    if (playerList) {
      for (let i = 0; i < playerList.length; i++) {
        const avatar = playerList[i].user.avatar;
        const name = playerList[i].user.name
        currentPlayers.push(
          <View key={i}>
            <Image source={require('../assets/WaitingRoom/waitingRoomBackground.png')} style={{width: 10, height: 10, flex:1}}/>
            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold', padding: '10%', display: 'flex', justifyContent: 'space-between',}}> {avatar} {name}</Text>
          </View>
        )
      }
    return currentPlayers;
    }
  }

  render() {
    return (
      <View>
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
    const randomIndex = Math.floor(Math.random() * testTips.length)
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
            <Text style={{fontSize: 40, color: 'red', fontWeight: 'bold', margin: '15%', width:'100%', height: '100%', textShadow: ''}}>  Waiting for more players</Text>
          </View>


          <View style={styles.tipsContainer}>
            {this.renderTips()}
            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: '5%', marginTop: '2%'}}>Tip: Claiming to be a liberal is the way to go </Text>
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
    flexWrap: 'wrap',
  },

  waitingMessageContainer: {
    backgroundColor: 'transparent',
    width: '80%',
    alignSelf: 'flex-start',
    flex: 0.38,
  },

  playersContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    flex: 0.5,
    display: 'flex',
    flexDirection: 'column',
    padding: '20%'
  },

  tipsContainer: {
    backgroundColor: '#958247',
    width: '100%',
    alignSelf: 'flex-end',
    flex: 0.12,
    opacity: 0.6,
  },


});

// const mapStateToProps = state => {
//   return {
//     playerList: state.game.playerList
//   }
// }
//
// export default connect(mapStateToProps, null)(WaitingRoom);
