import React, { Component } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { CustomeHeader } from '../index';

export  class HomeScreen extends Component {

    render() {
        return (
          <>
            <SafeAreaView style={{ flex: 1}}>
              <CustomeHeader title="Home"  isHome={true} navigation={this.props.navigation} />
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <TouchableOpacity style={{marginTop:20}}  onPress={() => this.props.navigation.navigate('HomeDetails')}>
                  <Text>
                    Go to Home Details
                  </Text>
                </TouchableOpacity>
              </View>
              
            </SafeAreaView>
          </>
        );
    }
}