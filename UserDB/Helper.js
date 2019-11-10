
import firebase from 'firebase'
import {User} from './User'

export function init() {

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

export function getUser() {
    return firebase.auth().currentUser;
}

export function isLoggedIn(){
    var user = firebase.auth().currentUser;
    if (user == null) {
        return true;
    } else {
        return false;
    }
}

export function signout(){
    var user = firebase.auth().currentUser;
    if (user) {
        firebase.auth().signOut();
    }
}

export function authentication(email, password) {
    if (!firebase.app.length) {
        init();
    }

    if(isLoggedIn()){
        signout();
    }

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);

    });
    return isLoggedIn();
}

export function setUserInfo(email_, password_, person){
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            firebase.database().ref( 'users/' + user.uid).set({
                email: email_,
                password: password_,
                fullName: person.fullName,
                age: person.age,
                location: person.location,
                phoneNumber: person.phoneNumber,
                sex: person.sex,
                height: person.height,
                currentWeight: person.currentWeight,
                goalWeight: person.goalWeight,
                foodArray: [FoodContent = {
                    title: 'sandwitch',
                    calories: 220,
                }],
                tde: person.tde,
            })
        }
     });
}

export function createUser(email_, password_, person) {
    if (isLoggedIn()) {
        signout();
    }
    
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

    let timerID = setInterval(setUserInfo(email_, password_, person), 500); //this starts the interval
    clearInterval(timerID); //make sure you call this when the timer needs to end

    return isLoggedIn();
}