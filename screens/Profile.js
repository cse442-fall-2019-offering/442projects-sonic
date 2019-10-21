import React from 'react';
import { View, Text, StyleSheet, DatePickerAndroid, Picker, ScrollView, StatusBar, TextInput, Image, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import * as firebase from 'firebase';

class Profile extends React.Component {

    state = {
        choosenLabel: '',
        choosenindex: '',
        email: '',
        fullName: '',
        password: '',
        passwordReEnter: '',
        dateOfBirth: '',
        location: '',
        phoneNumber: '',
        sex: '',
        height: '',
        currentWeight: '',
        goalWeight: ''
    };

    componentWillMount() {

        // To Configure react native app with cloud of Google Firebase database !
        var config = {
            apiKey: "AIzaSyAhQDAzgnHPymQkc1BNeB0sPKJTvPfZ20c",
            authDomain: "nutrition-go.firebaseapp.com",
            databaseURL: "https://nutrition-go.firebaseio.com",
            projectId: "nutrition-go",
            storageBucket: "nutrition-go.appspot.com",
            messagingSenderId: "353598024085",
            appId: "1:353598024085:web:b3e7f5645a5705a4186e9c",
            measurementId: "G-CLRT6JSHLW"
        };
        firebase.initializeApp(config);

    }

    authinticate(email_, fullName_, password_, passwordReEnter_, dateOfBirth_, location_, phoneNumber_, sex_,
        height_, currentWeight_, goalWeight_) {
        if ((email_.includes('@')) && !(password_ === '') && (passwordReEnter_ === password_)) {
            Alert.alert('good! --' + email_ + ', ' + password_ + ', ' + passwordReEnter_);
            firebase.database().ref('users/').push({
                email: email_,
                fullName: fullName_,
                password: password_,
                passwordReEnter: passwordReEnter_,
                dateOfBirth: dateOfBirth_,
                location: location_,
                phoneNumber: phoneNumber_,
                sex: sex_,
                height: height_,
                currentWeight: currentWeight_,
                goalWeight: goalWeight_
            });


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
                        placeholder='Date of Birth'
                        placeholderTextColor='#ffffff'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ dateOfBirth: text })}
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
                            selectedValue={this.state.choosenLabel}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ choosenLabel: itemValue, choosenindex: itemIndex, sex: itemValue })
                            }>

                            <Picker.Item label='Male' value='Male' />
                            <Picker.Item label='Female' value='Female' />
                        </Picker>

                    </View>

                    <TextInput style={styles.InputBox}
                        placeholder='Height'
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
                            selectedValue={this.state.choosenLabel}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ choosenLabel: itemValue, choosenindex: itemIndex })
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
                            navigate('Nutrition', { name: 'Jane' })
                            this.authinticate(this.state.email, this.state.fullName, this.state.password, this.state.passwordReEnter,
                                this.state.dateOfBirth, this.state.location, this.state.phoneNumber, this.state.sex, this.state.height,
                                this.state.currentWeight, this.state.goalWeight);

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