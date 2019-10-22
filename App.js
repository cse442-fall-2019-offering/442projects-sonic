import React from 'react';
import { View, Text, Button, Image, TouchableHighlight, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from './screens/Profile'
import Nutrition from './screens/Nutrition'
import {
  Input,
} from 'react-native-elements';
import * as firebase from 'firebase';



class HomeScreen extends React.Component {

  state = {
    user: null,
    isLoggedIn: false,
    good: false
  }

  componentWillMount() {

    // To Configure react native app with cloud of Google Firebase database !
    var config = {
      apiKey: "AIzaSyAhQDAzgnHPymQkc1BNeB0sPKJTvPfZ20c",
      authDomain: "nutrition-go.firebaseapp.com",
      databaseURL: "https://nutrition-go.firebaseio.com",
      projectId: "nutrition-go",
      storageBucket: "nutrition-go.appspot.com",
      messagingSenderId: "353598024085",
      appId: "1:353598024085:web:b3e7f5645a5705a4186e9c",
      measurementId: "G-CLRT6JSHLW"
    };
    firebase.initializeApp(config);

  }

  user_login(email_, password_) {
    var good = firebase.auth().signInWithEmailAndPassword(email_, password_).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        alert('here');
        return false;
      });
      return true;
  }

  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15, backgroundColor: "#00b3c0" }} >
        <View style={{ paddingBottom: 60, flexDirection: 'row' }}>
          <Image
            style={{ width: 60, height: 60, justifyContent: "space-evenly" }}
            source={require('./images/health.png')}
          />
          {/* <Image
            style={{ width: 60, height: 60 }}
            source={require('./images/health_dark.png')}
          /> */}
        </View>
        {/* <View style={{ paddingBottom: 80}}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require('./images/diet.png')}
          />
        </View> */}


        <Input
          placeholder='Username'
          placeholderTextColor='#ffff66'
          //backgroundColor='#00cccc'
          onChangeText={text => this.setState({ email: text })}
        />

        <Input
          placeholder='Password'
          placeholderTextColor='#ffff66'
          //backgroundColor='#00cccc'
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={{ padding: 15, marginTop: 10 }} >
          {/* <Button color = "#ffff66"
            style = {{color: 'black'}}
            title="            Log In            "
            onPress={() => Alert.alert('Log In button pressed')}
          /> */}
          <TouchableHighlight
            style={{
              height: 40,
              width: 150,
              borderRadius: 3,
              alignItems: 'center',
              backgroundColor: '#ffff66',
              padding: 10
            }}
            onPress={() => {
              //Alert.alert('Log In button pressed');
              if( (this.user_login(this.state.email, this.state.password)) == true ){
                navigate('Nutrition', { name: 'Jane' })
              }
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>       LOG IN      </Text>
          </TouchableHighlight>
        </View>

        <View style={{ flexDirection: 'row', }}>

          <Text> Create A </Text>
          <Text style={{ color: "#ffff66", fontWeight: 'bold' }} onPress={() => navigate('Profile', { name: 'Jane' })}> New Account </Text>
        </View>

      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Nutrition: { screen: Nutrition },

});

const App = createAppContainer(MainNavigator);

export default App;
