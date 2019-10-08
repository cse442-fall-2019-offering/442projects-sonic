import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text style = {styles.myfood}>
            {props.myfood}
         </Text>
      </View>
   )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
   myfood: {
      backgroundColor: '#4169e1',
      marginTop: 20,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25
   }}
)