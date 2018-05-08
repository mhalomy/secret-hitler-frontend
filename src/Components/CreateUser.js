import React, { Component } from 'react';
import { Card, CardSection, Button, HomeImage } from './Common';
import { TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class CreateUser extends Component {

  onCreateClick() {
    //navigate to...
    console.log('Create Username')
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

          <CardSection style={{flexDirection: 'column'}} >
            <Avatar
              containerStyle={{alignSelf: 'center'}}
              xlarge
              rounded
              source={{ uri: "https://cdn3.iconfinder.com/data/icons/cat-power-premium/120/cat_moustache-512.png"}}
              onPress={()=>console.log('avatar clicked')}
              activeOpacity={0.7}
            />
          </CardSection>

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