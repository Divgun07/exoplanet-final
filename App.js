import { StatusBar } from 'expo-status-bar';
import React from 'react';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen  from './screens/home';
import DetailScreen from './screens/details';
export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
}
}
const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Details: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(appStackNavigator);
