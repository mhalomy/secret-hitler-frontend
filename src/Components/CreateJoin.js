import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';

export default class CreateJoin extends Component {

  onCreateClick = () => {
    this.props.navigation.navigate('Create');
  }

  onJoinClick = () => {
    this.props.navigation.navigate('Join');
  }

  render () {
    return (
        <Card>
          <HomeImage />

          <CardSection>
            <Button onPress={this.onCreateClick}>
              Create
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onJoinClick}>
              Join
            </Button>
          </CardSection>
        </Card>
    );
  }
}