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
import { SearchBar, ListItem, Icon, Button } from 'react-native-elements';




class NutritionFacts extends React.Component  {

  constructor(props){
    super(props);

    this.state = {
        isLoading: true,
        itemInfo: this.props.navigation.state.params.itemInformation,
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
        })
       .then((response) => response.json())
       .then((responseJson) => {

         this.setState({
           isLoading: false,
           dataSource: responseJson.foods,
         })

       })
       .catch((error) =>{
         console.error(error);
       });
  }

  render(){

    const { navigate } = this.props.navigation;

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
                keyExtractor={(item) => {return item.nix_item_id} }
                data={this.state.dataSource}
                renderItem={({item}) =>

                   <View>

                       <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 10}} >

                            <Image
                              source={{ uri: item.photo.thumb }}
                              style={{ width: 200, height: 200, flex:1 }}
                            />

                            <Button
                              large
                              raised
                              rounded= {true}
                              title= "Add"
                              titleStyle = {{color:'#000000'}}
                              iconRight = {true}
                              buttonStyle = {{backgroundColor:'#FFFFFF'}}
                              icon = {{name:'ios-add-circle-outline', type:'ionicon'}}

                              onPress={() => {this.props.navigation.state.params.returnData(
                                                                                            `${item.photo.thumb}`,
                                                                                            `${item.nix_item_id}`,
                                                                                            `${item.brand_name}`,
                                                                                            `${item.food_name}`,
                                                                                            `${item.nf_calories}`,
                                                                                            `${item.nf_total_fat}`,
                                                                                            `${item.nf_saturated_fat}`,
                                                                                            `${item.nf_cholesterol}`,
                                                                                            `${item.nf_sodium}`,
                                                                                            `${item.nf_total_carbohydrate}`,
                                                                                            `${item.nf_dietary_fiber}`,
                                                                                            `${item.nf_sugars}`,
                                                                                            `${item.nf_protein}`);
                                                                                            this.props.navigation.goBack();
                              }}

                            />

                       </View>

                       <ListItem
                                 title={`${item.brand_name} ` + `${item.food_name} `}
                                 titleStyle= {{textAlign:'center', fontWeight: 'bold', fontSize: 18,}}
                                 subtitle ={"Serving Size: "+`${item.serving_qty} ` + `${item.serving_unit} `}
                                 subtitleStyle = {{textAlign:'center'}}
                                 bottomDivider
                       />
                       <ListItem
                                 title="Calories"
                                 subtitle={`${item.nf_calories} ` }
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/calories.png')} />
                       />
                       <ListItem
                                 title="Total Fat"
                                 subtitle ={`${item.nf_total_fat} ` + 'g'}
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/fat.jpg')} />
                       />
                       <ListItem
                                 title="Saturated Fat"
                                 subtitle ={`${item.nf_saturated_fat} `+'g'}
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/saturated_fat.png')} />
                       />
                       <ListItem
                                 title="Cholesterol"
                                 subtitle={`${item.nf_cholesterol} ` + 'mg'}
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/cholesterol.png')} />
                       />
                       <ListItem
                                 title="Sodium"
                                 subtitle ={`${item.nf_sodium} ` + 'mg'}
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50/*, resizeMode: 'contain'*/}}
                                    source= {require('../Images/sodium.png')} />
                       />
                       <ListItem
                                 title="Total Carbohydrate"
                                 subtitle ={`${item.nf_total_carbohydrate} ` + 'g'}
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/carbohydrates.png')} />
                       />
                       <ListItem
                                 title="Dietary Fiber"
                                 subtitle={`${item.nf_dietary_fiber} ` + 'g' }
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/dietary_fiber.png')} />
                       />
                       <ListItem
                                 title="Total Sugar"
                                 subtitle ={`${item.nf_sugars} ` +'g'}
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/sugar.jpg')} />
                       />
                       <ListItem
                                 title="Protein"
                                 subtitle ={`${item.nf_protein} ` + 'g'}
                                 bottomDivider
                                 rightIcon=<Image
                                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                                    source= {require('../Images/protein.png')} />
                       />

                   </View>

                }

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