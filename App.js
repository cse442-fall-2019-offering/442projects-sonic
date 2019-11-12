import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight
} from 'react-native';
import { Input } from 'react-native-elements';
import SignUp from './screens/SignUp'
import Nutrition from './screens/Nutrition'
import Login from './screens/Login'
import NutritionFacts from './screens/NutritionFacts'
import Home from './screens/Home'
import Profile from './screens/Profile'


class App extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return <Application/>;
  }

}

  const MainNavigator = createStackNavigator(

    {
        LoginScreen: {screen: Login, navigationOptions: { header: null }},
        SignUpScreen: {screen: SignUp, navigationOptions: { headerTransparent: true }},
        SearchScreen: {screen: Nutrition, navigationOptions: { header: null }},
        NutritionFactsScreen: {screen: NutritionFacts, navigationOptions: { headerTransparent: true }},
        HomeScreen: {screen: Home, navigationOptions: { header: null }},
        ProfileScreen: {screen: Profile, navigationOptions: { header: null }},

    },

    {
        initialRouteName: 'LoginScreen',
   //     headerMode: 'none'
    }

  );

  const Application = createAppContainer(MainNavigator);

export default App;