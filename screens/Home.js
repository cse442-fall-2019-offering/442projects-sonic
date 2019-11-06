import React, { Component } from 'react';
import { Text, View,StyleSheet,Image, ImageBackground,Dimensions } from 'react-native';
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
    var calories = this.props.navigation.getParam('calories','0');
    var protein = this.props.navigation.getParam('protein', '0');
    var fat = this.props.navigation.getParam('fat','0');
    var carbs = this.props.navigation.getParam('carbs','0');
    var today = new Date();
    date=+ parseInt(today.getMonth()+1) + "/" + today.getDate() + "/"+ today.getFullYear();
    return (
        
      
        <View style = {{flex:1}}>
        
        <View style={{flex:.5}}>
      
       <Image style={{flex:1, opacity:0.95}} source = {{uri: 'https://gimmedelicious.com/wp-content/uploads/2016/03/Fruit-Salad-with-Yogurt-Sauce-3-of-29.jpg'}}>
        
       </Image>
        </View>


        <View style={styles.background}>

<Text style={styles.titleStyle}> {date}</Text>
<View style = {{flex:1,flexDirection:'row'}}>
<View style = {styles.square}>
<Text style = {styles.bold}>TOTAL CALORIES </Text>

<Text style = {styles.totalCalories}> {calories} calories </Text>

</View>

<View style = { styles.square}>

<Text style ={styles.bold}>TOTAL PROTEIN</Text>
<Text style = {styles.totalProtein}> {protein}g </Text>
</View>


</View>



<View style = {{flex:1, flexDirection:'row'}}>
<View style = {styles.square}>
<Text style = {styles.bold}> TOTAL   FATS </Text>

<Text style ={styles.totalFat}> {fat}g</Text>
</View>

<View style = {styles.square}>
<Text style = {styles.bold}> TOTAL CARBS </Text>

<Text style = {styles.totalCarbs}> {carbs}g </Text>
</View>
</View>
</View>
       
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
    LinearGradientView:{
      flex:1,
      
  },
    background: {
        flex:0.5,
        backgroundColor:'#f0f4fa'
      },
      gradient: {
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      titleStyle: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginTop:10
      },
      totalCalories :{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'#5680E9',
        marginTop:10,
        textAlign:'center'
      },
      totalProtein :{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'#84CEEB',
        marginTop:10,
        textAlign: 'center'
      },
      totalFat :{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'#5AB9EA',
        marginTop:10,
        textAlign:'center'
      },
      totalCarbs:{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'black',
        marginTop:10,
        textAlign:'center'
      },
      bold :{
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color:'gray',
        marginTop:10,
        textAlign:'center'
      },
      square:{
          marginTop:10,
          marginLeft: 50,
          width: 120,
          height: 120,
          backgroundColor: '#FFFFFF'
      }

});

export default createAppContainer(TabNavigator);