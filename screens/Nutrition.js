
import React, {Component} from 'react';
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
import { ListItem, SearchBar } from 'react-native-elements';




var API = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
var DEFAULT_QUERY = 'ap';

class Nutrition extends React.Component  {
 constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {

    this.setState({ loading: true });

    return fetch(API + DEFAULT_QUERY,

        {
          headers:{
            'x-app-id' : '979e48c8',
            'x-app-key': 'e7cc162c38e1ee157bcad82667783fef'
          }
        })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.branded,
          loading: false,
        },function(){

        });
        this.arrayholder = responseJson.branded;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });



    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.food_name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
             // leftAvatar={{ source: { uri:  } }}
              title={`${item.food_name} `}
             // subtitle={}
            />
          )}
          keyExtractor={({id}, index) => id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}export default Nutrition;


