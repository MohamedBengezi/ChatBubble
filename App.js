import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';
import ChatScreen from './src/screens/ChatScreen';


const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Chat: ChatScreen
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Welcome'
    }
  }
);

export default createAppContainer(navigator);
