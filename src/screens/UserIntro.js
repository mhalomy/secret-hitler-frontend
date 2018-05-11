import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MainBoard from './MainBoard';

export default class UserIntro extends Component {

  goToBoard = () => {
    this.props.navigation.navigate('MainBoard');
  }

  render() {
    let roleImage =
    this.props.role === 'liberal' ? require('../assets/liberal.jpg') :
    this.props.role === 'fascist' ? require('../assets/fascist.jpg') :
    require('../assets/fascist.jpg')
    return (
    <View style={styles.parent}>
      {/* DO WE WANT ANY TEXT IN HERE??? <Text>Hello World</Text> */}

      <Image
        source={roleImage}
        style={styles.imageStyle}
      />

      <Button
        title="GOTCHA"
        onPress={this.goToBoard}
      />
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

// const timeout = setTimeout(()=> {
//
// }, 3000);

// const mapStateToProps = state => {
//   return {
//     role: 'liberal'
//   }
// }

// export default connect(mapStateToProps, null)( UserIntro);
