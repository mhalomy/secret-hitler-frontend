import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';
import { TextInput, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import avatars from '../Avatars.json';

export default class CreateUser extends Component {

  state = {
    avatars: avatars
  };

  onCreateClick() {
    //navigate to...
    console.log('Create Username')
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
            onPress={()=>console.log('avatar clicked')}
            activeOpacity={0.7}
            resizeMode="resize"
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
            />
          </CardSection>


          {this.renderAvatars()}


          <CardSection>
            <Button
              onPress={this.onCreateClick.bind(this)}
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