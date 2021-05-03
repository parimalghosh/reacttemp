import React, { Component } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
    import {CustomeHeader} from '../index';

export class SettingsScreen extends Component {

    render() {
        return (
            <>
                <SafeAreaView style={{ flex: 1}}>
                    <CustomeHeader title="Settings" isHome={true} navigation={this.props.navigation} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Settings!</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => this.props.navigation.navigate('SettingsDetails')} >
                        <Text>
                            Go to Settings Details
                        </Text>
                    </TouchableOpacity>
                    </View>
                
                </SafeAreaView>
            </>
          );
    }
}