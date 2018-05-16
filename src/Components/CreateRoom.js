import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage, View } from './Common';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class CreateRoom extends Component {

  constructor (props) {
    super(props)
    this.state = {
      gameId: undefined
    }
  }

  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    this.setState({
      gameId: this.props.game.id
    })
  }

  onStartClick() {
    this.props.navigation.navigate('Waiting');
  }

  revealGameId = () => {
    if (this.props.game.id) {
      return this.props.game.id;
    }
  }

  render () {
    return (
        <Card>
          <HomeImage />

          <CardSection style={styles.textContainerStyle} >
            <Text style={styles.textStyle} >
              Your GameID is {this.props.game.id}
            </Text>
          </CardSection>

          <CardSection>
            <Button onPress={this.onStartClick.bind(this)}>
              Start
            </Button>
          </CardSection>
        </Card>
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
