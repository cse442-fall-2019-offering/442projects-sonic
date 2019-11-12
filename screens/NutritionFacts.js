import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import { ListItem, Button, Input } from 'react-native-elements';




class NutritionFacts extends React.Component  {

  constructor(props){
    super(props);

    this.state = {
        isLoading: true,
        itemInfo: this.props.navigation.state.params.itemInformation,  
        servings: ' ' 
    };

  }


  componentDidMount(){

     return fetch(
        'https://trackapi.nutritionix.com/v2/search/item?nix_item_id=' + `${this.state.itemInfo}`,
        {
                headers:{
                  'x-app-id' : '0eaa9d35',
                  'x-app-key': '1f817bc9e71ffe3bd9a3db706d8ff92a'
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
       }
    );

  }

  wrongValue(item){

    if(this.state.servings == '0' || this.state.servings == '.' || this.state.servings == ',' || this.state.servings == '-' || this.state.servings == ' ' ){

        Alert.alert("Enter Valid # of Servings")

    }

    else{

      this.props.navigation.state.params.returnData(
        `${item.photo.thumb}`,
        `${item.nix_item_id}`,
        `${item.brand_name}`,
        `${item.food_name}`,
        `${item.nf_calories}` * this.state.servings,
        `${item.nf_total_fat}` * this.state.servings,
        `${item.nf_saturated_fat}` * this.state.servings,
        `${item.nf_cholesterol}` * this.state.servings,
        `${item.nf_sodium}` * this.state.servings,
        `${item.nf_total_carbohydrate}` * this.state.servings,
        `${item.nf_dietary_fiber}` * this.state.servings,
        `${item.nf_sugars}` * this.state.servings,
        `${item.nf_protein}` * this.state.servings,
        `${this.state.servings}`);
        this.props.navigation.goBack();




    }

    
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

                              onPress={() => {this.wrongValue(item); 
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

                        <View style = {styles.containerOne} >
                              <Text>Servings</Text>    
                              <Input
                              placeholder="# of Servings"  
                              underlineColorAndroid='transparent'  
                              inputStyle={styles.TextInputStyle}  
                              keyboardType= 'numeric'
                              maxLength = {1}
                              onChangeText= {(text) => this.setState({servings:text}) }
                              />

                        </View>    

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

    containerOne: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

    TextInputStyle: {  
      textAlign: 'center',  
         height: 20,  
         width: 1,
         borderRadius: 10,  
         borderWidth: 2,  
         borderColor: '#009688',  
         marginBottom: 10  
     }  

  });


export default NutritionFacts;