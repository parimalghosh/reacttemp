import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, TextInput, Alert  } from 'react-native';
import {AuthContext} from './context';

const LoginScreen = (props) => {

    const { signIn } = React.useContext(AuthContext);

    const [login,setLogin] = useState(0);  

    const [email,setEmail] = useState();  
    const [password,setPassword] = useState();  
    
    const LoginAction = () => {
      if(email!=='' && password!==''){
        if(validate(email)){
          if(email==='pari@gmail.com' && password=='123456'){
            setLogin(1);
            signIn();           
          }else{
            if(email!=='pari@gmail.com'){
              Alert.alert(
                "Error",
                "wrong Email !",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
            }else{
              Alert.alert(
                "Error",
                "Wrong password !",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
            }
          }
        }else{
          Alert.alert(
            "Error",
            "Email is invalid",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }
      }else{
        if(email===''){
          Alert.alert(
            "Error",
            "Email in can not be blank",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }else{
          Alert.alert(
            "Error",
            "Password in can not be blank",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }
      }       
    }

    const validate = (text) => {
      console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false){
        return false;
      }else {
        return true;
      }
    }
    

      return (
          <>
              <SafeAreaView style={{ flex: 1}}>                   
                  <View  style={styles.container}>
                      <Text style={styles.logo}>HeyAPP</Text>
                      <View style={styles.inputView} >
                        <TextInput  
                          style={styles.inputText}
                          placeholder="Email..." 
                          placeholderTextColor="#003f5c"
                          onChangeText={(text) => setEmail(text)}
                          value={email}
                        />
                      </View>
                      <View style={styles.inputView} >
                        <TextInput  
                          style={styles.inputText}
                          placeholder="Passoword..." 
                          placeholderTextColor="#003f5c"
                          onChangeText={(text) => setPassword(text)}
                          value={password}
                          secureTextEntry={true}
                        />
                      </View>
                      <TouchableOpacity onPress={() => props.navigation.navigate('Forgetpass')} >
                          <Text style={styles.forgot}>Forgot Password?</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.loginBtn}  onPress={() => LoginAction()}>
                          <Text style={styles.loginText}>LOGIN</Text>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={() => props.navigation.navigate('Register')}>
                          <Text style={styles.loginText}>Signup</Text>
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

  export default LoginScreen;