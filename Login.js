import React, {Fragment} from 'react';
import StyleSheet from 'react-native';

const Login = () => {
    return (
    
    <View style = {styles.container}>
        <TextInput style = {styles.input}></TextInput>
        <TextInput style = {styles.input}></TextInput>

    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container:{
        padding:20
    },
    input:{
        height: 40,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom: 20
    },
  });
  
  export default Login;
  