
import React from 'react';
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


class Nutrition extends React.Component  {
  render() {
    const {navigate} = this.props.navigation;
  return (
   <View style = {styles.container}>
    <View style = {styles.container1}>
<Header
  barStyle = {'dark-content'}
  backgroundColor ={'white'}
  leftComponent={{ icon: 'person', color: '#34eb8f', size: 35 }}
  centerComponent={{ text: 'Tuesday', style: { color: '#34eb8f',fontSize : 25 } }}
  rightComponent={{ icon: 'timeline', color: '#34eb8f',size: 35 }}
/>
<Text style = { styles.setFontSizeOne}>
  776/1700 Calories
</Text>

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

    <View style>
    <Text style = {styles.mealTitle} > Meals</Text>
    <Text> ___________________________________________________________</Text>
    </View>

      
      <Text style = {styles.meal}> Breakfast </Text>

      <View style = {styles.subContainer}>
      <Text style = {styles.lol} onPress={() => navigate('Information',{name:'Jane'})}> Mac and Cheese (1 serving) </Text>
      <Text style = {styles.lol}> 200 cal    14g 20g 1g </Text>
      </View>

      <Text style = {styles.meal}> Lunch </Text>
      <View style = {styles.subContainer}>
      <Text style = {styles.lol}> Chipotle Chicken Bowl (1 serving) </Text>
      <Text style = {styles.lol}> 860 cal    32g 20g 1g </Text>
      </View>

      <Text style = {styles.meal}> Dinner </Text>
      <View style = {styles.subContainer}>
      <Text style = {styles.lol}> Chicken (32 oz serving) </Text>
      <Text style = {styles.lol}> 350 cal    32g 20g 1g </Text>
      </View>


    </View>

    

  
    </View>
    





  );
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  container1:{
    alignItems: 'center',
  },
  subContainer:{
    flexDirection: 'row',
  },
  subContainer1:{
    flexDirection: 'row',
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

  },
  mealTitle:{
    padding: 20,
    fontSize:20,
    fontFamily: 'Rubik-Light',
    textAlign: 'center',
    color: '#696969'
  },
  meal :{
    padding: 15,
    fontSize:20,
    fontFamily: 'Rubik-Light',
    textAlign: 'left',
    color: '#696969'
  },
  lol :{
    fontFamily: 'Rubik-Light',
    color: '#696969'
  }

  
});
export default Nutrition;
