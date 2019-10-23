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
  TouchableHighlight,
  Modal
} from 'react-native';
import { Button, ListItem, Icon } from 'react-native-elements';



class Nutrition extends React.Component  {

  constructor(props){
    super(props);
    this.array = [];

    this.state = {
        isLoading: true,
        modalVisible: false,
        arrayHolder: [],
    };

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

  returnData(image, brand_name, food_name, calories, total_fat, saturated_fat, cholesterol, sodium, total_carbohydrate, dietary_fiber, total_sugar, protein ) {

       this.array.push({

               image: image,
               brand_name: brand_name,
               food_name: food_name,
               calories: calories,
               total_fat: total_fat,
               saturated_fat: saturated_fat,
               cholesterol: cholesterol,
               sodium: sodium,
               total_carbohydrate: total_carbohydrate,
               dietary_fiber: dietary_fiber,
               total_sugar: total_sugar,
               protein: protein,

       });

       arrayHolder: this.array

  }


  toggleModal(visible) {

       this.setState({ modalVisible: visible });

  }


  componentDidMount() {

       this.setState({ arrayHolder: this.array });
  }




  render(){

      const {navigate} = this.props.navigation;

      return(

        <View style={styles.container}>

             <Button
                 large
                 raised
                 rounded= {true}
                 title= "Item History"
                 titleStyle = {{color:'#000000'}}
                 iconRight = {true}
                 buttonStyle = {{backgroundColor:'#FFFFFF'}}
                 icon = {{name:'ios-add-circle-outline', type:'ionicon'}}
                 onPress={() => { this.toggleModal(true);}}
             />

             <TextInput
                 style={{height: 50, borderColor: 'black', borderWidth: 1}}
                 placeholder="Type your food..."
                 underlineColorAndroid = "#000000"
                 onChangeText={(text) => { this.fetchData(text); }}
             />

             <Modal
               animationType = {"slide"}
               transparent = {false}
               visible = {this.state.modalVisible}>

                <View>

                    <View style={styles.title}>

                        <Button
                            large
                            raised
                            rounded= {true}
                            title= "Close"
                            titleStyle = {{color:'#000000'}}
                            iconRight = {true}
                            buttonStyle = {{backgroundColor:'#FFFFFF'}}
                            icon = {{name:'ios-close-circle-outline', type:'ionicon'}}
                            onPress= {() => { this.toggleModal(!this.state.modalVisible)} }
                        />

                    </View>

                    <FlatList
                        data={this.state.arrayHolder}
                        width='100%'
                        extraData={this.state.arrayHolder}
                        keyExtractor={(index) => index}
                        renderItem={({ item }) =>(

                            <ListItem
                                leftAvatar= {{ source: {uri: item.image} }}
                                title={`${item.brand_name} ` + `${item.food_name} `}
                                titleStyle= {{fontWeight: 'bold', fontSize: 15,}}
                                subtitle={'Calories: '+`${item.calories}`}
                                // subtitleStyle = {{textAlign:'center'}}
                                bottomDivider
                            />

                        )}

                    />

                </View>

             </Modal>

             <FlatList
                 data={this.state.dataSource}
                 renderItem={({ item }) => (

                     <ListItem

                         leftAvatar={{ source: { uri:  `${item.image} `} }}
                         title={`${item.food_name} `}
                         subtitle={'Calories: '+`${item.nf_calories}`}
                         onPress={() => navigate('NutritionFactsScreen',{ itemInformation:`${item.nix_item_id}`, returnData: this.returnData.bind(this) })}

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