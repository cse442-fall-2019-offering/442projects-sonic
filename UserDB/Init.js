
import firebase from 'firebase'

export function init(){

    if(!firebase.app.length){
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
    
    
}