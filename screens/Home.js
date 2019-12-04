import React, { Component } from 'react';
import { Text, View,StyleSheet,Image, ImageBackground,Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Nutrition from '../screens/Nutrition'
import Profile from '../screens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import PieChart from 'react-native-pie-chart';
import Camera from '../screens/Camera'

var calResult = 0;
var proteinResult = 0;
var carbsResult = 0;
var fatsResult = 0;


class Home extends Component {

  constructor(props){
    super(props);
    this.array = [];
    this.arr = [];

    this.state = {  
        isLoading: true

    };
  }



  
  render() {
    var calories = this.props.navigation.getParam('calories','0');
    calResult = parseFloat(calResult) + parseFloat(calories);
    var protein = this.props.navigation.getParam('protein', '0');
    proteinResult = parseFloat(proteinResult) + parseFloat(protein);
    var fat = this.props.navigation.getParam('fat','0');
    fatsResult = parseFloat(fatsResult) + parseFloat(fat);
    var carbs = this.props.navigation.getParam('carbs','0');
    carbsResult = parseFloat(carbsResult) + parseFloat(carbs);
    var calorieProgress = calResult/1500;
    var today = new Date();
    date=+ parseInt(today.getMonth()+1) + "/" + today.getDate() + "/"+ today.getFullYear();
    const chart_wh = 150
    const series = [proteinResult,fatsResult,carbsResult,0.00000000000001]
    const sliceColor = ['#00818a','#ee4540','#007944','#FF9800']

    return (
        
        <View style = {{flex:1}}>


          <View style={{flex:.3, backgroundColor:'#3cba62'}}>

            <Text style = {{fontSize:20,color:'white',marginTop:15,marginLeft:15}}> Today's Intake </Text>

            <View style ={{flex:1,marginTop:30,alignItems:'center'}}>

              <Progress.Bar  size={30} progress={calorieProgress} height={30} width={300} color = 'white'/>
            
            </View>  


          </View>


          <View style={styles.background}>


            <View style = {{flex:0.2,flexDirection:'row',marginTop:15,alignSelf:'center'}}>

              <Icon name = "arrow-left" style ={{marginRight:100}}/>
              <Icon name = "calendar-day"  size = {20} color="black"/>
              <Text style={styles.titleStyle}> {date}</Text>
              <Icon name = "arrow-right" style ={{marginLeft:100}}/>
              
            </View>


            <View style = {{flex:0.3,flexDirection:'row',marginTop:15,alignSelf:'center'}}>


              <View style = {styles.square}>

                <Text style = {styles.bold}>CALORIES </Text>
                <Text style = {styles.totalCalories}> {calResult} cal</Text>

              </View>


              <View style = {styles.square2}>

                <Text style ={styles.bold}>PROTEIN</Text>
                <Text style = {styles.totalProtein}> {proteinResult}g </Text>

              </View>


              <View style = {styles.square3}>

                <Text style = {styles.bold}> FATS </Text>
                <Text style ={styles.totalFat}> {fatsResult}g</Text>

              </View>


              <View style = {styles.square4}>

                <Text style = {styles.bold}> CARBS </Text>       
                <Text style = {styles.totalCarbs}> {carbsResult}g </Text>

              </View>


            </View>


            <View style = {{flex:0.4, alignSelf:'center',marginTop:15}}>
          
              <PieChart
                  chart_wh={chart_wh}
                  series={series}
                  sliceColor={sliceColor}
                  doughnut={true}
                  coverRadius={0.45}
                  coverFill={'#FFF'}
                />

            </View>


          </View>


        </View>

    );

  }

}

const TabNavigator = createBottomTabNavigator(
  
  {
  
    Home: { 
      screen: Home,        
      navigationOptions: {
            tabBarLabel:"Home Page",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home" size={30} color="#cfc9c8" />
            )
      }
    },

    Search: {
        screen: Nutrition,
        navigationOptions: {
            tabBarLabel:"Search",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="search" size={30} color= "#cfc9c8" />
            )
        }
    },
        
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon:({tintColor}) => (
              <Icon name = "user" size = {30} color = "#cfc9c8"/>
            )
        }
    },

    Camera: {
      screen: Camera,
      navigationOptions: {
          tabBarLabel:"Scanner",
          tabBarIcon:({tintColor}) => (
            <Icon name = "user" size = {30} color = "#cfc9c8"/>
          )
      }
    }

    

  }

);

const styles = StyleSheet.create({
    container: {
      flex: 1

    },
    LinearGradientView:{
      flex:1,
      
  },
    background: {
        flex:0.7,
        backgroundColor:'#f0f4fa'
      },
      gradient: {
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      titleStyle: {
        fontSize: 15,
        color: 'black',
        textAlign:'center',
        marginLeft:10
      },
      totalCalories :{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'white',
        marginTop:10,
        textAlign:'center'
      },
      totalProtein :{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'white',
        marginTop:10,
        textAlign: 'center'
      },
      totalFat :{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'white',
        marginTop:10,
        textAlign:'center'
      },
      totalCarbs:{
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        color:'white',
        marginTop:10,
        textAlign:'center'
      },
      bold :{
        fontSize: 12,
        fontFamily: 'Roboto-Bold',
        color:'white',
        marginTop:10,
        textAlign:'center'
      },
      square:{
          marginTop:10,
          width: 80,
          height: 80,
          borderRadius: 80/2,
          marginLeft:10,
          backgroundColor: '#39375b'
      },
      square2:{
        marginTop:10,
        width: 80,
        height: 80,
        borderRadius: 80/2,
        marginLeft:10,
        backgroundColor: '#00818a'
    },
    square3:{
      marginTop:10,
      width: 80,
      height: 80,
      borderRadius: 80/2,
      marginLeft:10,
      backgroundColor: '#ee4540'
  },
  square4:{
    marginTop:10,
    width: 80,
    height: 80,
    borderRadius: 80/2,
    marginLeft:10,
    backgroundColor: '#007944'
}

});

export default createAppContainer(TabNavigator);