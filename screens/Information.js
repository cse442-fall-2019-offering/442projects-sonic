import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import FoodImage from './img/image.js'
import PresentationalComponent from './screens/PresentationalComponent'


 
class Information extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
   food = {
      myfood: 'Kraft Macaroni & Cheese',
      myservingsize: '1 cup',
      mycals: 376,
      myfat: 16,
      mycarbs: 47,
      mychol: 5.9,
      mysod: 669,
      myfib: 2.4,
      mysug: 8.5,
      myprot: 9.7,
      myNumber: '0'
   }

   render() {
      return (
        <View flex = {1}>
         <View>
            <PresentationalComponent myfood = {this.food.myfood}/>
         </View>

          <View>
          <Text></Text>
          <Text></Text>
          <FoodImage/>
          <Text></Text>
          <Text></Text>
          <Text></Text>
       </View>
       <View>
          <Text style = {{fontSize: 20, textAlign: 'center'}}> Nutrition Information (Per Serving) </Text>
          <Text></Text>
          <Text> Serving Size: {this.food.myservingsize} </Text>
          <Text> Calories: {this.food.mycals}</Text>
          <Text> Fat: {this.food.myfat} g </Text>
          <Text> Carbs: {this.food.mycarbs} g </Text>
          <Text> Cholesterol: {this.food.mychol} mg </Text>
          <Text> Sodium: {this.food.mysod} mg</Text>
          <Text> Fiber: {this.food.myfib} g</Text>
          <Text> Sugars: {this.food.mysug} g</Text>
          <Text> Protein: {this.food.myprot} g</Text>
          <Text> Fiber: {this.food.myfib}</Text>
       </View>
       <View  
        width = '100%'
        position = 'absolute'
        bottom = {0}>
        <View
        underlineColorAndroid ={'gray'}>
        
        <TextInput
         keyboardType = 'number-pad'
         placeholder= "Servings"
         maxLength={9}
         fontSize = {20}
         textAlign={'center'}
        />

        </View>
        <Text></Text>
        <Button
        title ="Submit" 
        fontSize = {20}  >

        </Button>
      </View>
       </View>
        
      );
   }
}
export default Information;