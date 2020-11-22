import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  static navigationOptions = {
      title: 'Animation',
    };
  render() {
    return <LottieView source={require('./animation.json')} autoPlay loop />;
  }
}