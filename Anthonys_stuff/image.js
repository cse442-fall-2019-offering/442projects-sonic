import React, { Component } from 'react'
import { View, Image } from 'react-native'

const FoodImage = () => (
   <Image source = {{uri:'https://target.scene7.com/is/image/Target/GUEST_99f72f1b-791c-48bc-9bc9-4fef9c6eaeca?wid=488&hei=488&fmt=pjpeg'}}
   style = {{ width: 200, height: 200, alignSelf: 'center' }}
   />
)
export default FoodImage