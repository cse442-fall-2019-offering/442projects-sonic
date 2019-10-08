
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
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native';

import {Header} from 'react-native-elements'


class Nutrition extends React.Component  {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://trackapi.nutritionix.com/v2/search/instant/?query=grilled cheese')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.branded,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
  return (
    <View style={{flex: 1, paddingTop:20}}>
    <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => <Text>{item.food_name}, {item.nf_calories}</Text>}
    />
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
