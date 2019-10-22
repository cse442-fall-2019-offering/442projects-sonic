import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    DatePickerAndroid,
    Picker,
    ScrollView,
    StatusBar,
    TextInput,
    Image
} from 'react-native';
import {Button,Icon} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';




class SignUp extends React.Component {
 
  state = { choosenLabel: '', choosenindex: '' };

  render() {

    const {navigate} = this.props.navigation;

    return (

       <LinearGradient colors= {['#61045f','#20011f']} style = {styles.LinearGradientView}>

           <ScrollView
               showsVerticalScrollIndicator = {false}
               keyboardDismissMode = 'on-drag' >

                   <StatusBar backgroundColor="black" barStyle="light-content" />
                   <Text style = {styles.SignUpText}> Sign Up </Text>


                   <TextInput style= {styles.InputBox}
                       placeholder='Email Address'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Full Name'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Password'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Re-enter password'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Date of Birth'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Location'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Phone Number'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <View>

                        <Text style={{color:'white'}}>Sex</Text>

                        <Picker style = {{color:'white'}}
                            selectedValue={this.state.choosenLabel}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({choosenLabel: itemValue, choosenindex: itemIndex })
                        }>

                           <Picker.Item label ='Male' value ='Male' />
                           <Picker.Item label = 'Female' value = 'Female' />

                        </Picker>

                   </View>


                   <TextInput style= {styles.InputBox}
                       placeholder='Height'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Current Weight'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />

                   <TextInput style= {styles.InputBox}
                       placeholder='Goal Weight'
                       placeholderTextColor='#ffffff'
                       underlineColorAndroid= 'transparent'
                   />


                   <View>

                        <Text style={{color:'white'}}>Activity Level</Text>

                        <Picker style = {{color:'white'}}
                            selectedValue={this.state.choosenLabel}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({ choosenLabel: itemValue, choosenindex: itemIndex })
                        }>

                           <Picker.Item label ='Sedentary (little to no exercise)' value ='1.2' />
                           <Picker.Item label ='Lightly Active (lightly exercise/sports 1-3 days/week)' value = '1.375' />
                           <Picker.Item label ='Moderately Active (moderate exercise/sports 3-5 days/week)' value = '1.55' />
                           <Picker.Item label ='Very Active (hard exercise/sports 6-7 days/week)' value = '1.725' />
                           <Picker.Item label ='Extremely Active (very heavy exercise/physical job/training twice a day)' value = '1.9'/>
                        </Picker>

                   </View>


                   <Button
                       large
                       raised
                       rounded= {true}
                       title= "Let's Get Started!"
                       icon = {{name:'ios-cloud-done', type:'ionicon'}}
                       onPress={() => navigate('SearchScreen')}
                   />





           </ScrollView>

       </LinearGradient>


    );
  }
}


const styles = StyleSheet.create({

   LinearGradientView:{
       flex:1,
       alignItems: 'center',
   },

   SignUpText:{
       fontSize: 44,
       color: 'white',
       padding: 50
   },

   InputBox:{
       width: 300,
       backgroundColor: '#0C0032',
       borderRadius: 25,
       paddingHorizontal: 16,
       marginVertical: 10,
       color: '#ffffff'

   },



});

export default SignUp;