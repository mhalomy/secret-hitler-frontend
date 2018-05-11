import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Tile from './Tile';

export default class Board extends Component {
  constructor (props) {
    super(props)
  }

  renderTiles = () => {
    const tileArray = [];
    let tileNumber;
    if (this.props.className === 'liberal') {
      tileNumber = 5
      for (let i = 0; i < tileNumber; i++) {
        // if (this.props.numberOfLiberalPolicies) {
          if (i <= 2) {
            tileArray.push(
              //<Tile className='liberal' key={i}>
                <Image key={i} source={require('../assets/board/liberalPolicy.png')} style={{height: '50%', width:'15%'}}/>
              // </Tile>
            )
          } else {
            tileArray.push(<Tile
              className='liberal'
              key={i}
            />
          )
        }
      }
    } else {
      tileNumber = 6
      for (let i = 0; i < tileNumber; i++) {
        // if (this.props.numberOfLiberalPolicies) {
          if (i <= 6) {
            tileArray.push(
              //<Tile className='liberal' key={i}>
                <Image key={i} source={require('../assets/board/fascistPolicy.png')} style={{height: '50%', width:'14%'}}/>
              // </Tile>
            )
          } else {
            tileArray.push(<Tile
              className='liberal'
              key={i}
            />
          )
        }
      }
    }
    return tileArray;
  }

  render () {
    return (
      <View style={styles.board}>
        {this.renderTiles()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  board: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
