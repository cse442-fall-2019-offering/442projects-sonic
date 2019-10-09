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
        LoginScreen: {screen: Login},
        SignUpScreen: {screen: SignUp},
        SearchScreen :{screen: Nutrition},
    },

    {
        initialRouteName: 'LoginScreen',
    }

  );

  const Application = createAppContainer(MainNavigator);

export default App;