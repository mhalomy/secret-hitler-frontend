import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Button } from './Common';

export default class CreateJoin extends Component {

  onCreateClick() {
    //navigate to the CreateRoom component
  }

  onJoinClick() {
    //navigate to the JoinRoom component
  }

  render () {
    return (
        <Card>
          <CardSection>
            <Image
              style={styles.imageStyle}
              source={{uri: imageUrl}}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onCreateClick.bind(this)}>
              Create
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onJoinClick.bind(this)}>
              Join
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const imageUrl = 'https://lh3.googleusercontent.com/Je1l2lhriY7bJ6EfoMWW48FI2-9WSV7DM9i_xCYJXYMI1BtImqs-aRVz-thTOMccCh5qI0NBrMnv4ybudwlj=w1523-h904';
const styles = {
  imageStyle: {
    height: 400,
    flex: 1,
    width: null,
    marginTop: 30,
    marginBottom: 30
  }
};