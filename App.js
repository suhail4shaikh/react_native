/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Footer from './AwesomeProject/footer';
import Header from './AwesomeProject/header';

const userForm = {
    username:'',
    Password:'',
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = userForm;
    }

    submitForm() {
        if (this.state.username.length > 0) {
            alert('Submit button pressed !!!');
        }
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Header/>
                <View
                    style={{
                        backgroundColor: 'white',
                        flex: 14,
                        padding: 10,
                    }}>
                    <Text style={{marginBottom:10}}>User Name : </Text>
                    <TextInput
                        style={{ height: 40, padding:10, width: '100%', borderColor: 'black', borderWidth: 2, borderRadius: 4, marginBottom:10 }}
                        onChangeText={text => this.setState({ ...this.state,username : text })}
                        value={this.state.username}
                    />
                    <Text style={{marginBottom:10}}>Password : </Text>
                    <TextInput
                        style={{ height: 40, padding:10, width: '100%', borderColor: 'black', borderWidth: 2, borderRadius: 4, marginBottom:10 }}
                        onChangeText={text => this.setState({ ...this.state,Password : text })}
                        secureTextEntry={true}
                    />
                    <Text style={{marginBottom:10}}>You have entered : {this.state.text}</Text>

                    <Button  title="submit button" onPress={()=> this.submitForm()} disabled={this.state.username.length === 0 ? true : false}>Submit Form</Button>

                </View>
                <Footer/>
            </View>
        );
    }
}
