import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {CustomeHeader} from '../index';

export class NotificationsScreen extends Component{

    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <CustomeHeader title="Notifications" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications Screen!</Text>
                
                </View>
            
            </SafeAreaView>
        );
    }
}