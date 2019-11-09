
import firebase from 'firebase'

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

export function authentication(email, password) {
    if (!firebase.app.length) {
        init();
    }

    var user = firebase.auth().currentUser;
    if(user){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
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
    var user = firebase.auth().currentUser;

    if (user == null) {
        return true;
    } else {
        return false;
    }
}