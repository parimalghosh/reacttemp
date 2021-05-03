import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import { Image } from 'react-native';

export class CustomeHeader extends Component{
    render() {
        let { navigation, isHome, title } = this.props;
        return (
            <Header>
              <Left>
              {
                isHome ? 
                
                  <Button transparent>
                    <TouchableOpacity onPress={() => navigation.openDrawer() }>
                      <Image
                        source={{uri: 'https://img.icons8.com/cotton/344/menu.png'}} 
                        style={{height: 40, width: 40, marginLeft: 5 }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </Button>
                
                :
                  <Button transparent>
                    <TouchableOpacity 
                      style={{flexDirection:'row',justifyContent:'center'}} 
                      onPress={() => navigation.goBack()}
                    >
                      <Image 
                        source={{uri: 'https://img.icons8.com/cotton/344/circled-left-2.png'}} 
                        style={{height: 40, width: 40, marginLeft: 5 }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>  
                  </Button>
              }
              </Left>
              <Body style={{alignItems:'center'}}>
                <Title>{title}</Title>
              </Body>
              <Right>
                
              </Right>
            </Header>
             
          )
    }
}