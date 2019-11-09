import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight,
    Alert
} from 'react-native';
import { Input } from 'react-native-elements';
import SignUp from './screens/SignUp'
import Nutrition from './screens/Nutrition'
import Login from './screens/Login'
import NutritionFacts from './screens/NutritionFacts'
import {init} from './UserDB/Helper'



class App extends React.Component {
  db_setup = () =>{
    init();
  }

  componentDidMount() {
    this.db_setup();
    //Alert.alert("here");
  }

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
        NutritionFactsScreen: {screen: NutritionFacts, navigationOptions: { headerTransparent: true }}
    },

    {
        initialRouteName: 'LoginScreen',
   //     headerMode: 'none'
    }

  );

  const Application = createAppContainer(MainNavigator);

export default App;