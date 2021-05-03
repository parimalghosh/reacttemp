import React, { Component } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import {CustomeHeader} from '../index';

export class SettingsScreenDetails extends Component{

    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <CustomeHeader title="Settings Details" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Settings Details!</Text>
                    
                </View>
                
            </SafeAreaView>
          );
    }
}