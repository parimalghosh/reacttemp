import * as React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity,ScrollView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomeHeader, CustomeDrawerContent } from './src';
import { HomeScreen, HomeScreenDetails, SettingsScreen, SettingsScreenDetails } from './src/tab';
import { NotificationsScreen } from './src/drawer';
import { RegisterScreen, ForgetPassword } from './src/auth';
import LoginScreen from './src/auth/LoginScreen';
import {AuthContext} from './src/auth/context';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
    headerShown: false
})

const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetails" component={HomeScreenDetails} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

const StackSettings = createStackNavigator();
function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen name="Settings" component={SettingsScreen} options={navOptionHandler} />
      <StackSettings.Screen name="SettingsDetails" component={SettingsScreenDetails} options={navOptionHandler} />
    </StackSettings.Navigator>
  )
}

function TabNavigator() {
  return(
    <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Image
                  source={{uri: 'https://img.icons8.com/metro/344/home.png'}} 
                  style={{height: 20, width: 20, marginLeft: 5 }}
                  resizeMode="contain"
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Image
                  source={{uri: 'https://img.icons8.com/metro/344/settings.png'}} 
                  style={{height: 20, width: 20, marginLeft: 5 }}
                  resizeMode="contain"
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
  )
}


const Drawer = createDrawerNavigator();

function DrawerNavigator ({navigation}) {
  return (
    <Drawer.Navigator 
      initialRouteName="MenuTab" 
      drawerContent={() => <CustomeDrawerContent navigation={navigation}/> }
    >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} /> 
      <Drawer.Screen name="Logout" component={LoginScreen} />     
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();


export default function App({navigation}) {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('13132313');
      setIsLoading(true);
      //alert(userToken);  
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)    
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
      
    },
    signUp: () => {
      setUserToken('ertyertetrt');
      setIsLoading(false);
    }
  }));

  React.useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
  },[])

  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator animating={isLoading} size="large" color='red' />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          userToken === null ? (
            <StackApp.Navigator initialRouteName="Login">         
              <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
              <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
              <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
              <StackApp.Screen name="Forgetpass" component={ForgetPassword} options={navOptionHandler} />
            </StackApp.Navigator>
          ) : (
            <StackApp.Navigator initialRouteName="HomeApp">         
              <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
              <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
              <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
              <StackApp.Screen name="Forgetpass" component={ForgetPassword} options={navOptionHandler} />
            </StackApp.Navigator>
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}