/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Footer from '../footer';



export default class About extends Component {


    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        flex: 14,
                        padding: 10,
                    }}>
                    <Text style={{marginBottom:10}}>Welcome to about page. </Text>

                </View>
                <Footer/>
            </View>
        );
    }
}
