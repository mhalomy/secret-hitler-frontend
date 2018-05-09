import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';
import { TextInput, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import avatars from '../Avatars.json';

export default class CreateUser extends Component {

  state = {
    user: {
      avatar: undefined,
      id: undefined,
      name: undefined
    },
    avatars: avatars
  };

  onCreateClick = () => {
    this.props.navigation.navigate('CreateJoin');
  }

  onAvatarClick = (event) => {
    console.log(event)
    return this.setState({
      user: {
      }
    })
  }

  onTextInput = (name) => {
    return this.setState({
      user: {
        ...this.state.user,
        name
    }});
  }

  renderAvatars() {
    return this.state.avatars.map((avatar, i) => {
      return (
        <View key={i}>
          <Avatar
            containerStyle={{alignSelf: 'center', marginBottom: 20}}
            large
            rounded
            source={{ uri: avatar.img }}
            onPress={this.onAvatarClick}
            activeOpacity={0.7}
          />
        </View>
      );
    });
  }

  render () {
    return (
        <Card>
          <CardSection>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Enter your Username"
              autoCorrect={false}
              onChangeText={this.onTextInput}
              value={this.state.user.name}
            />
          </CardSection>

          {this.renderAvatars()}

          <CardSection>
            <Button
              onPress={this.onCreateClick}
              style={{ marginTop: 50}}
            >
              Let Me In...
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  textInputStyle: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
    marginBottom: 50,
    height: 50,
    textAlign: 'center'
  },
  textInputContainerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center'
  }
}