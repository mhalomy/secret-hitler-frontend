import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MainBoard from './mainBoard';
import Button from '../Components/Common/';

class UserIntro extends Component {
  goToBoard = () => {
    this.props.navigation.navigate('MainBoard');
  }

  componentWillMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  componentWillUnmount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }

  renderRoleCard = () => {
    for (let i = 0; i < this.props.players.length; i++) {
      const player = this.props.players[i];
      if (this.props.user.id === player.user.id) {
        if (player.hitler) {
          return <Image source={require('../assets/HighResSHPngs/roleHitler.png')} style={styles.imageStyle} />
        } else if (player.faction === 'liberal') {
          return <Image source={require('../assets/HighResSHPngs/roleLiberal.png')} style={styles.imageStyle} />
        } else {
          return <Image source={require('../assets/HighResSHPngs/roleFascist.png')} style={styles.imageStyle} />
        }
      }
    }
  }

  render() {
    return (
    <View style={styles.parent}>
      {this.renderRoleCard()}

      <Button
        onPress={this.goToBoard}>
        Ok, Got it!
      </Button>

      {/* <Button
        navigation={this.props.navigation}
        title="Ok, Got it!"
        onPress={this.goToBoard}
      /> */}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    marginTop:20,
    backgroundColor: 'grey',
    flex:1,
    flexDirection: 'column',
  },
  imageStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 400,
    width:null,
    flex: 1
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
  players: state.game.playerList,
  role: state.game.playerList.faction
})

export default connect(mapStateToProps, null)( UserIntro);
