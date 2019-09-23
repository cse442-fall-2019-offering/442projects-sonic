/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';

import {Header} from 'react-native-elements'


const App = () => {
  return (
   <View style = {styles.container}>

<Header
  barStyle = {'dark-content'}
  backgroundColor ={'white'}
  leftComponent={{ icon: 'person', color: '#34eb8f', size: 35 }}
  centerComponent={{ text: 'Tuesday', style: { color: '#34eb8f',fontSize : 25 } }}
  rightComponent={{ icon: 'timeline', color: '#34eb8f',size: 35 }}
/>
<View style = {styles.calorieContainer}>
<Text style = { styles.setFontSizeOne}>
  776/1700 Calories
</Text>
</View>

<View style = {styles.subContainer}>
  <Text style = {styles.subTitle}> PROTEIN </Text>
  <Text style = {styles.subTitle1}> FAT </Text>
  <Text style = {styles.subTitle2}> CARBS </Text>
  </View>
  <View style = {styles.subContainer1}>
  <Text style = {styles.item}> 130g </Text>
  <Text style = {styles.item1}> 32g </Text>
  <Text style = {styles.item2}> 3.4g </Text>
  </View>


</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  calorieContainer:{
    flex:1
  },
  subContainer:{
    flex:2,
    textAlign: 'center',
    flexDirection: 'row',
    paddingLeft: 40
  },
  subContainer1:{
    flex:2,
    textAlign: 'center',
    flexDirection: 'row',
    paddingLeft: 40
  },
  setFontSizeOne:{
    padding: 30,
    fontSize: 40,
    fontFamily: 'Rubik-Light',
    textAlign: 'center',
    color: '#34eb8f' 
    
  },
  subTitle:{
    padding: 15,
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
    color: '#B7E5F6'
  },
  subTitle1:{
    padding: 15,
    fontSize: 20,
    fontFamily: 'Rubik-Light',
    textAlign: 'center',
    color: '#ffe373'
  },
  subTitle2:{
    padding: 15,
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
    textAlign: 'center',
    color: '#FC2D2D'
  },
  item:{
    padding: 15,
    fontSize: 20,
    fontFamily: 'Rubik-Light',
    color: '#B7E5F6',
    textAlign: 'center',
  },
  item1:{
    padding: 15,
    fontSize: 20,
    fontFamily: 'Rubik-Light',
    textAlign: 'center',
    color: '#ffe373'

  },
  
  item2:{
    padding: 15,
    fontSize: 20,
    fontFamily: 'Rubik-Light',
    textAlign: 'center',
    color: '#FC2D2D'

  }

  
});

export default App;
