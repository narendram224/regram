import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { color } from '../config/color'

function PrimaryBtton(props){
    return (
        <View style={styles.container}>
           
           <TouchableOpacity style={[styles.button,{backgroundColor:props.buttonBgColor}]}>
             <Text style={[styles.text,{color:props.labelColor}]}>{props.buttonLabel}</Text>
           </TouchableOpacity>
        </View>
    )
}

export default PrimaryBtton
const styles = StyleSheet.create({
    container: {
        width:"100%",padding:15
      },
      button:{
          padding:15,
          borderRadius:5
      },
      text:{
          textAlign:'center',
          fontSize:16
      }

 })
