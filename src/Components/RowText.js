import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const RowText = (props) => {
    const {messageOne,messageTwo,containerStyles,messageOneStyles,messageTwoStyles}= props;
  return (
    <View style={containerStyles}>
        <Text style={messageOneStyles}>{messageOne}</Text>
         <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

const styles=StyleSheet.create({

})
export default RowText