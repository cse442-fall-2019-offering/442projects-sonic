import React from 'react';
import { View, Text,Button,Image,TouchableHighlight, Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from './screens/Profile'
import Nutrition from './screens/Nutrition'
import {
  Input,
} from 'react-native-elements';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
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
          <Text style={{ color: "#ffff66", fontWeight: 'bold' }} onPress={() => navigate('Profile',{name:'Jane'})}> New Account </Text>
        </View>

      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Nutrition :{screen: Nutrition},

});

const App = createAppContainer(MainNavigator);

export default App;
