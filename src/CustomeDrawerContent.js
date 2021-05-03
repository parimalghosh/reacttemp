import React, { Component } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { Image } from 'react-native';
import { AuthContext } from './auth/context';

export const CustomeDrawerContent = () => {

    const { signOut } = React.useContext(AuthContext);
    return(
        <SafeAreaView style={{ flex: 1}}>
            <View style={{height:150, alignItems:'center', justifyContent:'center'}}>
                <Image 
                source={{uri: 'https://img.icons8.com/ios/344/user-male-circle.png'}}
                style={{height:120, width:120, borderRadius:60}}
                />
            </View>
            <ScrollView style={{marginLeft:5}}>
                <TouchableOpacity
                    style={{marginTop:20}}  
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text>Menu Tab</Text>
                </TouchableOpacity>
        
                <TouchableOpacity
                    style={{marginTop:20}}  
                    onPress={() => this.props.navigation.navigate('Notifications')}
                >
                    <Text>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginTop:20}}  
                    onPress={() => {signOut()}}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
    
}
