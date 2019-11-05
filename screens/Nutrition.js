import React from 'react';
import {
  Animated,
  Dimensions,
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
  Modal,
  TouchableOpacity
} from 'react-native';
import { Button, ListItem, Icon } from 'react-native-elements';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';



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
          'x-app-id' : '88d8c8cc',
          'x-app-key': 'd978303c8f19bf2a431e703f174bfbe3'
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


  returnData(image, item_id, brand_name, food_name, calories, total_fat, saturated_fat, cholesterol, sodium, total_carbohydrate, dietary_fiber, total_sugar, protein ) {

       this.array.push({

               image: image,
               item_id: item_id,
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


  deleteRow(index) {

      this.array.splice(index, 1);
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

                    <SwipeListView
                        data={this.array}
                        width='100%'
                        extraData={this.array}
                        keyExtractor={(item,index) => {return `${index}` } }
                        renderItem={({item, index}) =>(

                            <Animated.View>

                                    <ListItem
                                        leftAvatar= {{ source: {uri: item.image} }}
                                        title={`${item.brand_name} ` + `${item.food_name} `}
                                        titleStyle= {{fontWeight: 'bold', fontSize: 15}}
                                        subtitle={'Calories: '+`${item.calories}`}
                                        bottomDivider
                                    />

                            </Animated.View>

                        )}

                        renderHiddenItem={ ({item,index}) => (

                            <View style={styles.standaloneRowBack}>

                                 <TouchableOpacity s
                                        style={[ styles.backRightBtn, styles.backRightBtnRight]}
                                        onPress={() => this.deleteRow( index )}
                                 >

                                    <Text style={styles.backTextWhite}> Delete </Text>

                                </TouchableOpacity>

                            </View>

                        )}

                        disableRightSwipe = {true}
                        rightOpenValue={-75}

                    />

                </View>

             </Modal>

             <FlatList
                 data={this.state.dataSource}
                 keyExtractor={(item) => {return item.nix_item_id} }
                 renderItem={({ item }) => (

                     <ListItem

                         leftAvatar={{ source: { uri: item.photo.thumb } }}
                         title={`${item.brand_name} `+`${item.food_name} `}
                         subtitle={'Calories: '+`${item.nf_calories}`}
                         onPress={() => navigate('NutritionFactsScreen',{ itemInformation:`${item.nix_item_id}`, returnData: this.returnData.bind(this) })}
                         bottomDivider

                     />

                 )}

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
    title: {
      paddingBottom: 16,
      textAlign: 'center',
      color: '#404d5b',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#d42c2c',
        //backgroundColor: '#8BC645',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    controls: {
        alignItems: 'center',
        marginBottom: 30,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    switch: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        width: Dimensions.get('window').width / 4,
    },
    trash: {
        height: 25,
        width: 25,
    },
  });

export default Nutrition;

