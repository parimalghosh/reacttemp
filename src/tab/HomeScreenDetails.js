import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {CustomeHeader} from '../index';

export class HomeScreenDetails extends Component{

    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
                <CustomeHeader title="Home Details" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home Details!</Text>
                    
                </View>                
            </SafeAreaView>
          );
    }
}