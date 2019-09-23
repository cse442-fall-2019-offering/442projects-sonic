// @author: Syed Rehman
// Log In Screen

import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  TouchableHighlight,
  //Button,
  Image
} from 'react-native';
import {
  Input,
} from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { bold } from 'ansi-colors';

export default class SomeApp extends Component {
  render() {
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

        />

        <Input
          placeholder='Password'
          placeholderTextColor='#ffff66'
          //backgroundColor='#00cccc'
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
            onPress={() => Alert.alert('Log In button pressed')}
          >
            <Text style = {{fontWeight : 'bold'}}>       LOG IN      </Text>
          </TouchableHighlight>
        </View>

        <View style={{ flexDirection: 'row', }}>

          <Text> Create A </Text>
          <Text style={{ color: "#ffff66", fontWeight: 'bold' }} onPress={() => Alert.alert('Create Account pressed !')}> New Account </Text>
        </View>

      </View>
    );
  }
}