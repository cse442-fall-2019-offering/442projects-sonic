import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { Input } from 'react-native-elements';




class Login extends React.Component {

  render() {

    const {navigate} = this.props.navigation;

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
        />

        <Input
          placeholder='Password'
          placeholderTextColor='#ffff66'
        />

        <View style={{ padding: 15, marginTop: 10 }} >

          <TouchableHighlight
            style={styles.loginButtonStyle}
            onPress={() => Alert.alert('Log In button pressed')}
          >

            <Text style = {{fontWeight : 'bold'}}> LOG IN </Text>

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

   loginButtonStyle:{
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