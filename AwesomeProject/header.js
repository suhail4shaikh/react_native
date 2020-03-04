/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#0074a6',
          flex: 1,
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={{color: 'white'}}>Let Navigate </Text>
      </View>
    );
  }
}
export default Header; // Don’t forget to use export default!
