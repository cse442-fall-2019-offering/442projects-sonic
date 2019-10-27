import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    Alert,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import Modal from "react-native-modal";
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';





class Login extends React.Component {

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {

    const {navigate} = this.props.navigation;

    return (

      <LinearGradient colors= {['#97E1BE','#E26BF7']} style = {{flex:1,justifyContent:"center",alignItems: "center",padding: 15}}>
  
        <View style={{ paddingBottom: 60, flexDirection: 'row' }}>

          <Text style = {{fontSize: 40,color: "white",fontWeight: "bold",letterSpacing:2.5}}>
            NUTRITION
              GO
          </Text>

        </View>



        <Input
          placeholder='Username'
          placeholderTextColor='#FFFFFF'
          //backgroundColor='#00cccc'

        />

        <Input
          placeholder='Password'
          placeholderTextColor='#FFFFFF'
          //backgroundColor='#00cccc'
        />


        <View style={{ padding: 15, marginTop: 50 }} >


          <TouchableHighlight
            style={styles.loginButtonStyle}
            onPress={() => Alert.alert('Log In button pressed')}
          >

            <Text style = {{fontWeight : 'bold'}}> LOG IN </Text>

          </TouchableHighlight>

        </View>

        <View style={{ flexDirection: 'row', }}>
        <TouchableHighlight
            style={styles.loginButtonStyle}
            onPress={() => navigate('SignUpScreen')}
          >

            <Text style = {{fontWeight : 'bold'}}> SIGN UP </Text>

          </TouchableHighlight>

          

        </View>

        <View style={{ padding: 15, marginTop: 50 }} >

        <Text style = {{color:'white'}} onPress={this.toggleModal}> Privacy Policy </Text>
        <Modal backdropColor={'white'} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Website URL, unless otherwise defined in this Privacy Policy. </Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
 

        

        </View>


      </LinearGradient>
    );
  }
}



const styles = StyleSheet.create({



   loginButtonStyle:{
     backgroundColor: 'rgba(255, 255, 255, 0.9)',
     height: 50,
     width:300,
     marginHorizontal:20,
     borderRadius:35,
     alignItems:'center',
     justifyContent:'center',
   },

   imageStyle: {
        width: 60,
        height: 60,
        justifyContent: "space-evenly"
   }



});

export default Login;