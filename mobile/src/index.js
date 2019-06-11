import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';
import Main from './Main';
import Favs from './Favs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Logo from '../assets/img/logo.png';

const CustomDrawerComponent = props => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        height: 200,
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: '#297fb9',
        elevation: 5
      }}>
      <Image source={Logo} style={{ height: 120, width: 120 }} />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#297fb9',
          marginBottom: 5
        }}>
        SUAM
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);

const AppNavigator = createDrawerNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Mapa',
        drawerIcon: ({ tintColor }) => (
          <Icon name="map-marked-alt" size={25} color={tintColor} />
        )
      }
    },
    Favs: {
      screen: Favs,
      navigationOptions: {
        title: 'Remédios salvos',
        drawerIcon: ({ tintColor }) => (
          <Icon name="clipboard-list" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: '#297fb9'
    },
    contentComponent: CustomDrawerComponent
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
