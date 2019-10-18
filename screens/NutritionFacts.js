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
    };
  }


  ComponentDidMount(){
    return fetch('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f',
      {
        headers:{
          'x-app-id' : '979e48c8',
          'x-app-key': 'e7cc162c38e1ee157bcad82667783fef'
        }
      })
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.foods,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

        const list = [
                    {
                      title: 'Brand Name',
                      subtitle: ' '
                    },

                    {
                      title: 'Calories',
                      subtitle: {this.state.dataSource.nf_calories}
                    },
                    {
                      title: 'Total Fat',
                      subtitle: {this.state.dataSource.nf_total_fat} +'g'
                    },
                    {
                      title: 'Saturated Fat',
                      subtitle: {this.state.dataSource.nf_saturated_fat} + 'g'
                    },
                    {
                      title: 'Cholesterol',
                      subtitle: {this.state.dataSource.nf_cholesterol} + 'mg'
                    },
                    {
                      title: 'Sodium',
                      subtitle: {this.state.dataSource.nf_sodium} + 'mg'
                    },
                    {
                      title: 'Total Carbohydrate',
                      subtitle: {this.state.dataSource.nf_total_carbohydrate} +'g'
                    },
                    {
                      title: 'Dietary Fiber',
                      subtitle: {this.state.dataSource.nf_dietary_fiber} + 'g'
                    },
                    {
                      title: 'Sugar',
                      subtitle: {this.state.dataSource.nf_sugars} + 'g'
                    },
                    {
                      title: 'Protein',
                      subtitle: {this.state.dataSource.nf_protein} + 'g'
                    },
                    {
                      title: 'Potassium',
                      subtitle: {this.state.dataSource.nf_potassium} + 'mg'
                    },
        ]



    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            subtitle={item.subtitle}
            bottomDivider
            chevron
        />
    )


   render(){

      return(


             <FlatList
                   keyExtractor={this.keyExtractor}
                   data={list}
                   renderItem={this.renderItem}
             />

      )
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