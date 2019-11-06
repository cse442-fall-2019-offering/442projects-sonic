

import React from 'react';
import { View, Text, StyleSheet, DatePickerAndroid, Picker, ScrollView, StatusBar, TextInput, Image, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import * as firebase from 'firebase';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            choosenLabel: '',
            choosenindex: '',
            email: '',
            fullName: '',
            password: '',
            passwordReEnter: '',
            age: '',
            location: '',
            phoneNumber: '',
            sex: '',
            height: '',
            currentWeight: '',
            goalWeight: '',
            activity_level: 1.2,
            tde: 0
        };
        this.good = false;
    }
    
    
    

    // componentWillMount() {

    //     // To Configure react native app with cloud of Google Firebase database !
    //     var config = {
    //         apiKey: "AIzaSyAhQDAzgnHPymQkc1BNeB0sPKJTvPfZ20c",
    //         authDomain: "nutrition-go.firebaseapp.com",
    //         databaseURL: "https://nutrition-go.firebaseio.com",
    //         projectId: "nutrition-go",
    //         storageBucket: "nutrition-go.appspot.com",
    //         messagingSenderId: "353598024085",
    //         appId: "1:353598024085:web:b3e7f5645a5705a4186e9c",
    //         measurementId: "G-CLRT6JSHLW"
    //     };

    //     //firebase.initializeApp(config);

    // }

    // setUserData() {
    //     firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
    //         email: this.state.email,
    //         fullName: this.state.fullName,
    //         password: this.state.password,
    //         age: Number(this.state.age),
    //         location: this.state.location,
    //         phoneNumber: this.state.phoneNumber,
    //         sex: this.state.sex,
    //         height: Number(this.state.height),
    //         currentWeight: Number(this.state.currentWeight),
    //         goalWeight: Number(this.state.goalWeight),
    //         foodArray: [],
    //         tde: Number(this.state.tde),
    //     });
    // }


    authinticate(email_, fullName_,  password_, passwordReEnter_ , age_, location_, phoneNumber_, 
        sex_, height_, currentWeight_, goalWeight_, tde_) {
        if ((email_.includes('@')) && !(password_ === '') && (passwordReEnter_ === password_)) {

            firebase.auth().createUserWithEmailAndPassword(email_, password_).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    id = user.uid;
                    if (id != null) {
                        this.good = true;
                        
                        firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
                            email: email_,
                            fullName: fullName_,
                            password: password_,
                            age: Number(age_),
                            location: location_,
                            phoneNumber: phoneNumber_,
                            sex: sex_,
                            height: Number(height_),
                            currentWeight: Number(currentWeight_),
                            goalWeight: Number(goalWeight_),
                            foodArray: [],
                            tde: Number(tde_),
                        });
                    }else{
                        alert.alert("null id");
                    }
                } else {
                    user.delete();
                    alert.alert("not ready");
                }
              });
            
            

            // Alert.alert('good! --' + email_ + ', ' + password_ + ', ' + passwordReEnter_);

        } else {
            Alert.alert('bad! --' + email_ + ', ' + password_ + ', ' + passwordReEnter_);
        }
    }


    render() {

        const { navigate } = this.props.navigation;
        return (
            <LinearGradient colors={['#61045f', '#20011f']} style={styles.LinearGradientView}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode='on-drag' >

                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <Text style={styles.SignUpText}> Sign Up </Text>


                    <TextInput style={styles.InputBox}
                        placeholder='Email Address'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ email: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Full Name'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ fullName: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Password'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ password: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Re-enter password'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ passwordReEnter: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Age'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ age: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Location'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ location: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Phone Number'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ phoneNumber: text })}
                    />

                    <View>

                        <Text style={{ color: 'white' }}>Sex</Text>
                        <Picker style={{ color: 'white' }}
                            selectedValue={this.state.sex}
                            onValueChange={(itemValue, itemIndex) =>
                                //this.state.sex = itemValue
                                this.setState({ sex : itemValue})
                            }>

                            <Picker.Item label='Male' value='Male' />
                            <Picker.Item label='Female' value='Female' />
                        </Picker>

                    </View>

                    <TextInput style={styles.InputBox}
                        placeholder='Height (in inches)'
                        keyboardType='numeric'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ height: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Current Weight'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ currentWeight: text })}
                    />

                    <TextInput style={styles.InputBox}
                        placeholder='Goal Weight'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ goalWeight: text })}
                    />


                    <View style={{ paddingBottom: 25 }}>

                        <Text style={{ color: 'white' }}>Activity Level</Text>

                        <Picker style={{ color: 'white', paddingBottom: 10 }}
                            selectedValue={this.state.activity_level}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ choosenLabel: itemValue, choosenindex: itemIndex, activity_level: itemValue })
                            }>

                            <Picker.Item label='Sedentary (little to no exercise)' value='1.2' />
                            <Picker.Item label='Lightly Active (lightly exercise/sports 1-3 days/week)' value='1.375' />
                            <Picker.Item label='Moderately Active (moderate exercise/sports 3-5 days/week)' value='1.55' />
                            <Picker.Item label='Very Active (hard exercise/sports 6-7 days/week)' value='1.725' />
                            <Picker.Item label='Extremely Active (very heavy exercise/physical job/training twice a day)' value='1.9' />
                        </Picker>

                    </View>


                    <Button
                        large
                        raised
                        rounded={true}
                        title="Let's Get Started!"
                        icon={{ name: 'ios-cloud-done', type: 'ionicon', buttonStyle: styles.someButtonStyle }}
                        onPress={() => {
                            //navigate('Nutrition', { name: 'Jane' })
                            //this.authinticate(this.state.email, this.state.password, this.state.passwordReEnter)
                            if (this.state.sex === 'Male') {
                                this.setState({tde: (66 + (13.7 * (Number(this.state.currentWeight) * 2.2)) + 
                                    (5 * 2.54 * Number(this.state.height) - (6.8 * Number(this.state.age)))) * Number(this.state.activity_level)})
                            } else {
                                this.setState({ted: (655 + (9.6 * (Number(this.state.currentWeight) * 2.2)) + (1.8 * 2.54 * Number(this.state.height) - 
                                    (4.7 * Number(this.state.age)))) * Number(this.state.activity_level)})
                            }

                            this.authinticate(this.state.email, this.state.fullName, this.state.password, 
                                this.state.passwordReEnter, this.state.age, this.state.location, this.state.phoneNumber, 
                                this.state.sex, this.state.height, this.state.currentWeight, this.state.goalWeight, this.state.tde)


                            if (this.good) {
                                navigate('Nutrition')
                            }

                        }}
                    />





                </ScrollView>
            </LinearGradient>


        );
    }
}


const styles = StyleSheet.create({

    LinearGradientView: {
        flex: 1,
        alignItems: 'center',
    },

    SignUpText: {
        fontSize: 44,
        color: 'white',
        padding: 50
    },

    InputBox: {
        width: 300,
        backgroundColor: '#0C0032',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10,
        color: '#ffffff'

    },



});

export default Profile;
