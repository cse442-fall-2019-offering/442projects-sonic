
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

import {SearchBar} from 'react-native-elements'


class Nutrition extends React.Component  {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this.arrayholder = []
  }

  componentDidMount(){
    return fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + 'mac and cheese',
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
          dataSource: responseJson.branded,
        }, function(){
          this.arrayholder = responseJson;
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

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
    <View style={styles.viewStyle}>
    <SearchBar
      round
      searchIcon={{ size: 24 }}
      onChangeText={text => this.SearchFilterFunction(text)}
      onClear={text => this.SearchFilterFunction('')}
      placeholder="Type Here..."
      value={this.state.search}
    />
    <FlatList
      data={this.state.dataSource}
      ItemSeparatorComponent={this.ListViewItemSeparator}
      renderItem={({ item }) => (
        // Single Comes here which will be repeatative for the FlatListItems
        <Text style={styles.textStyle}>{item.food_name}</Text>
      )}
      enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
    />
  </View>
  );
}
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
  textStyle: {
    padding: 10,
  },
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
