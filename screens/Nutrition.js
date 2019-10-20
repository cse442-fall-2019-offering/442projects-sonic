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
          'x-app-id' : '48a4fb4d',
          'x-app-key': 'ab1a023c1f9211523c711e0bbdd17599'
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

      const {navigate} = this.props.navigation;


      return(


        <View style={styles.container}>


             <TextInput
                 placeholder="Type your food..."
                 underlineColorAndroid = "#000000"
                 onChangeText={(text) => { this.fetchData(text); }}
             />

             <FlatList
                 data={this.state.dataSource}
                 renderItem={({ item }) => (

                 <ListItem

                     leftAvatar={{ source: { uri:  `${item.image} `} }}
                     title={`${item.food_name} `}
                     subtitle={'Calories: '+`${item.nf_calories}`}
                     onPress={() => navigate('NutritionFactsScreen',{itemInformation:`${item.nix_item_id}`})}

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



