import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../config/color'

function PrimaryInput(props){
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput placeholder={props.placeholder} />
            </View>
        </View>
    )
}

export default PrimaryInput
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      inputWrapper:{
          backgroundColor:colors.grey1,
          borderWidth:0.5,
          borderColor:colors.grey,
          borderRadius:5,
          height:50,
          justifyContent:"center",
          paddingLeft:10,
          
      }
 })
