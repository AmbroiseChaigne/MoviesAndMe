/*eslint-disable prettier/prettier */
// Animations/FadeIn.js

import React from 'react';
import {Animated,Dimensions} from 'react-native';
//import Animated from 'react-native-reanimated';

class FadeIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      positionLeft: new Animated.Value(Dimensions.get('window').width),
    };
  }

  componentDidMount() {
    Animated.spring(
      this.state.positionLeft,
      {
        toValue: 0,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={{ left: this.state.positionLeft }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeIn;
