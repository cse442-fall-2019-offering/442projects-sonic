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

class NutritionInfo extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        itemInfo: this.props.navigation.state.params.itemInfo,
    };
  }

      const url = 'https://trackapi.nutritionix.com/v2/search/item?query=';

    fetch(url + {this.state.itemInfo},
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





   render(){

      return(


        <View style={styles.container}>


             <FlatList
                 data={this.state.dataSource}
                 renderItem={({ item }) => (

                const list = [
                  {
                    title: 'Brand Name',
                  },

                  {
                    title: 'Calories',
                    subtitle: {item.nf_calories}
                  },
                  {
                    title: 'Total Fat',
                    subtitle: {item.nf_total_fat} +'g'
                  },
                  {
                    title: 'Saturated Fat',
                    subtitle: {item.nf_saturated_fat} + 'g'
                  },
                  {
                    title: 'Cholesterol',
                    subtitle: {item.nf_cholesterol} + 'mg'
                  },
                  {
                    title: 'Sodium',
                    subtitle: {item.nf_sodium} + 'mg'
                  },
                  {
                    title: 'Total Carbohydrate',
                    subtitle: {item.nf_total_carbohydrate} +'g'
                  },
                  {
                    title: 'Dietary Fiber',
                    subtitle: {item.nf_dietary_fiber} + 'g'
                  },
                  {
                    title: 'Sugar',
                    subtitle: {item.nf_sugars} + 'g'
                  },
                  {
                    title: 'Protein',
                    subtitle: {item.nf_protein} + 'g'
                  },
                  {
                    title: 'Potassium',
                    subtitle: {item.nf_potassium} + 'g'
                  },
               ]

                <View>
                  {
                    list.map((item, i) => (
                      <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        bottomDivider
                        chevron
                      />
                    ))
                  }
                </View>
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
  export default NutritionInfo;