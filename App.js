import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';
import ChatScreen from './src/screens/ChatScreen';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header';
import HeaderLeft from './src/components/HeaderLeft';
import HeaderRight from './src/components/HeaderRight';

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Chat: ChatScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitle: () => (<Header />),
        headerLeft: () => (<HeaderLeft />),
        headerRight: () => (<HeaderRight />)
      }
    }
  }
);

export default createAppContainer(navigator);
