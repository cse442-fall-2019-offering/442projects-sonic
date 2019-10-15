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
  FlatList,
  Input,
  TouchableHighlight
} from 'react-native';
import { SearchBar, ListItem, Icon } from 'react-native-elements';



var API = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
var DEFAULT_QUERY = '';

class Nutrition extends React.Component  {
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  fetchData(text) {
    this.setState({ text });
    const url = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
    fetch(url + text,
      {
        headers:{
          'x-app-id' : '979e48c8',
          'x-app-key': 'e7cc162c38e1ee157bcad82667783fef'
        }
      })
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.branded,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }




   render(){

      return(


        <View style={styles.container}>


             <TextInput
                 placeholder="Type your food..."
                 underlineColorAndroid = "#000000"
                 onChangeText={(text) => { this.fetchData(text); }}
               //  inlineImageLeft='fastfood-24px.svg'

             />

             <FlatList
                 data={this.state.dataSource}
                 renderItem={({ item }) => (

                 <ListItem
                     leftAvatar={{ source: { uri:  `${item.image} `} }}
                     title={`${item.food_name} `}
                     subtitle={'Calories: '+`${item.nf_calories}`}
                  />

                  )}

                  keyExtractor={({id}, index) => id}

             />

        </View>


      );
    }
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 24,
      backgroundColor: 'white',
    },
    content: {
      paddingBottom: 300,
    },
    card1: {
      paddingVertical: 16,
    },
    card2: {
      padding: 16,
    },
    input: {
      marginTop: 4,
    },
    title: {
      paddingBottom: 16,
      textAlign: 'center',
      color: '#404d5b',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
  });
  export default Nutrition;