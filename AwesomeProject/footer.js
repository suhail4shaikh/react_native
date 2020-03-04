/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text>This is footer section</Text>
      </View>
    );
  }
}
export default Footer;
