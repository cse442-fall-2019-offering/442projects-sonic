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




class NutritionFacts extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        itemInfo: this.props.navigation.state.params.itemInformation,
    //    foods: []
    };

  }


 componentDidMount(){
    let foods = [];
     return fetch(
        'https://trackapi.nutritionix.com/v2/search/item?nix_item_id=' + `${this.state.itemInfo}`,
        {
                headers:{
                  'x-app-id' : '979e48c8',
                  'x-app-key': 'e7cc162c38e1ee157bcad82667783fef'
                }
        }

        )
       .then((response) => response.json())
       .then((responseJson) => {



         this.setState({
           isLoading: false,
           dataSource: responseJson.foods,
         }, function(){

         });



       })
       .catch((error) =>{
         console.error(error);
       });
   }

   render(){

     if(this.state.isLoading){
       return(
        <View style={styles.container}>
           <ActivityIndicator/>
         </View>
       )
     }

     return(
        <View style={styles.container}>
         <FlatList
           data={this.state.dataSource}
           renderItem={({item}) =>
           <View>
           <ListItem
                     title={`${item.brand_name} ` + `${item.food_name} `}
                     subtitle ={`${item.serving_qty} ` + `${item.serving_unit} `}

           />
           <ListItem
                     title="Calories"
                     subtitle={`${item.nf_calories} ` }
           />
           <ListItem
                     title="Total Fat"
                     subtitle ={`${item.nf_total_fat} ` + 'g'}
           />
           <ListItem
                     title="Saturated Fat"
                     subtitle ={`${item.nf_saturated_fat} `+'g'}
           />
           <ListItem
                     title="Cholesterol"
                     subtitle={`${item.nf_cholesterol} ` + 'mg'}
           />
           <ListItem
                     title="Sodium"
                     subtitle ={`${item.nf_sodium} ` + 'mg'}
           />
           <ListItem
                     title="Total Carbohydrate"
                     subtitle ={`${item.nf_total_carbohydrate} ` + 'g'}
           />
           <ListItem
                     title="Dietary Fiber"
                     subtitle={`${item.nf_dietary_fiber} ` + 'g' }
           />
           <ListItem
                     title="Total Sugar"
                     subtitle ={`${item.nf_sugars} ` +'g'}
           />
           <ListItem
                     title="Protein"
                     subtitle ={`${item.nf_protein} ` + 'g'}
           />
           </View>
           }
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


  export default NutritionFacts;