import React, { Component } from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Nutrition from '../screens/Nutrition'
import Profile from '../screens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome';


class Home extends Component {

  constructor(props){
    super(props);
    this.array = [];

    this.state = {
        isLoading: true
    };
  }
  
  render() {
    const data1 = this.props.navigation.getParam('calories');
    const item = this.props.navigation.getParam('item');
    var today = new Date();
    date=+ parseInt(today.getMonth()+1) + "/" + today.getDate() + "/"+ today.getFullYear();
    return (
        
        <View style={styles.container}>
        <Image style={styles.background}
          source={require('../assets/homebackground.jpg')} />
    
<View>
<Text style={styles.titleStyle}> {date}</Text>
</View>

<Text style = {styles.totalCalories}> Today's Total Calories </Text>

<Text style = {styles.totalCalories}> 1800 calories </Text>

<Text style ={styles.totalCalories}> Today's Total Protein</Text>

<Text style = {styles.totalCalories}> 100 grams </Text>



        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
    Home: { screen: Home,
            navigationOptions: {
            tabBarLabel:"Home Page",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home" size={30} color="#cfc9c8" />
            )
          }
                    },
    Search: {screen:Nutrition,
    
        navigationOptions: {
            tabBarLabel:"Search",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="search" size={30} color= "#cfc9c8" />
            )
          },
        Profile: {screen:Profile,
        navigationOptions:{
          tabBarLabel:"Profile",
          tabBarIcon:({tintColor}) =>(
            <Icon name = "user" size = {30} color = "#cfc9c8"/>
          )
        }}
      }

  });

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: 0.9
      },
      gradient: {
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      titleStyle: {
        fontSize: 35,
        color: 'white',
        marginTop: 80,
        alignSelf: 'center'
      },
      totalCalories :{
        fontSize: 20,
        fontWeight:'bold',
        color:'white',
        marginTop:35
      }

});

export default createAppContainer(TabNavigator);