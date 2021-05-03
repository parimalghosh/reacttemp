import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export const ForgetPassword = (props) => {

    const [email,setEmail] = useState();

    const EmailVAlidate = () => {
        if(email !== ''){
          Alert.alert(
            "Success",
            "No Text !",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }else{
          Alert.alert(
            "Error",
            "Email can not be blank !",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }
    }


    return (
      <>
        <SafeAreaView style={{ flex: 1}}>                   
            <View style={styles.container}>
                <Text style={styles.logo}>HeyAPP</Text>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Enter Register Email..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setEmail(text)}/>
                </View>                       
                
                
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText} onPress={() => EmailVAlidate()}>SUBNIT</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>                
            </View>                
        </SafeAreaView>
      </>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"white",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"black",
      backgroundColor:"white",
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });