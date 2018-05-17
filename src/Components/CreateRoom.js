import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';
import { Text, View, Clipboard } from 'react-native';
import { connect } from 'react-redux';

class CreateRoom extends Component {

  constructor (props) {
    super(props);
    this.state = {
      gameId: undefined,
      clipboardContent: "gameidhere123"
    };
  }

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    this.setState({
      gameId: this.props.game.id
    })
  }

  onStartClick = () => {
    this.props.navigation.navigate('Waiting');
  }

  revealGameId = () => {
    if (this.props.game.id) {
      return this.props.game.id;
    }
  };

  writeToClipboard = async () => {
    const gameId = this.state.gameId;
    await Clipboard.setString(gameId);
    alert('Copied to Clipboard!');
  };

  render () {
    console.log('GAME IDDDDDD ===================D', this.props.game.id)
    return (
        <View>
          <HomeImage />
          <View style={styles.textContainerStyle} >
            <Text selectable={true} style={styles.textStyle} >
              Your GameID is {this.props.game.id}
            </Text>
          </View>

          <View style={styles.textContainerStyle} >
            <Button onPress={this.writeToClipboard} >
              Copy
            </Button>
          </View>

          <CardSection>
            <Button onPress={this.onStartClick}>
              Start
            </Button>
          </CardSection>
        </View>
    );
  }
}

const styles = {
  textStyle: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    marginLeft: 50,
    marginRight: 50,
    height: 50,
    textAlign: 'center'
  },
  textContainerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => ({
  game: state.game,
  user: state.user
})

export default connect(mapStateToProps, null)(CreateRoom);
