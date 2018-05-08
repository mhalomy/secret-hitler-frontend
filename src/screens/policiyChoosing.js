import React, { Component } from 'react';
import { connect } from 'react-redux';

class PolicyChoosing extends Component {


  render() {
    return (

    )
  }
}

const mapStateToProps = state => {
   return {
     optionCards: state.policiesToPick
   }
}
export default PolicyChoosing;