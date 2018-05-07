import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';

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
          <HomeImage />

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