import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';


export const RegisterScreen = (props) => {

    const [name,setName] = useState();
    const [mobile,setMobile] = useState();
    const [email,setEmail] = useState();
    const [address,setAddress] = useState();
    const [password,setPassword] = useState();
    

    return (
        <>
            <SafeAreaView style={{ flex: 1}}>                   
                <View style={styles.container}>
                    <Text style={styles.logo}>HeyAPP</Text>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Name..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setName(text)}/>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Mobile Number..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setMobile(text)}
                            keyboardType="numeric"
                            maxLength = {10}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Email..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setEmail(text)}/>
                    </View>
                    <View style={styles.inputView1} >
                        <TextInput  
                            style={styles.inputText1}
                            placeholder="Address..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setAddress(text)}
                            multiline={true}
                            numberOfLines={5}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Password..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setPassword(text)}/>
                    </View>
                    
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>SIGNUP</Text>
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
    inputView1:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:25,
        height:100,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
    inputText:{
      height:50,
      color:"black",      
      backgroundColor:"white",
    },
    inputText1:{
        height:100,
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