import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableHighlight,
  StyleSheet,
  Alert
} from 'react-native';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';




class Login extends React.Component {


  state = {
    user: null,
    isLoggedIn: false,
    good: false
  }

  componentDidMount() {

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
    this.state.isLoggedIn = true;
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
      this.state.isLoggedIn = false;
    });
    
  }


  render() {

    const { navigate } = this.props.navigation;

    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15, backgroundColor: "#00b3c0" }} >

        <View style={{ paddingBottom: 60, flexDirection: 'row' }}>

          <Image
            style={styles.imageStyle}
            source={require('../Images/health.png')}
          />

        </View>

        <Input
          placeholder='Username'
          placeholderTextColor='#ffff66'
          onChangeText={text => this.setState({ email: text })}
        />

        <Input
          placeholder='Password'
          placeholderTextColor='#ffff66'
          onChangeText={text => this.setState({ password: text })}

        />

        <View style={{ padding: 15, marginTop: 10 }} >

          <TouchableHighlight
            style={styles.loginButtonStyle}
            onPress={() => {
              //Alert.alert('Log In button pressed');
              this.user_login(this.state.email, this.state.password)
              if(this.state.isLoggedIn){
                navigate('SearchScreen')
              }
            }}
          >

            <Text style={{ fontWeight: 'bold' }}> LOG IN </Text>

          </TouchableHighlight>

        </View>

        <View style={{ flexDirection: 'row', }}>

          <Text> Create A </Text>
          <Text style={{ color: "#ffff66", fontWeight: 'bold' }} onPress={() => navigate('SignUpScreen')}> New Account </Text>

        </View>

      </View>

    );

  }

}



const styles = StyleSheet.create({

  loginButtonStyle: {
    height: 40,
    width: 150,
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: '#ffff66',
    padding: 10
  },

  imageStyle: {
    width: 60,
    height: 60,
    justifyContent: "space-evenly"
  }

});

export default Login;