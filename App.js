import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import Instagram from './screen/instagram';
import Facebook from './screen/facebook';

export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
 instagram:{screen:Instagram},
 facebook:{screen:Facebook}
})
const AppContainer = createAppContainer(TabNavigator)