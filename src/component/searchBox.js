import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../config/color';

function SearchBox(){
    const [text, setText] = useState("")
    const handleText = (text)=>{
            setText(text);
    }
    return (
        <View style={styles.container}>
            <View style={styles.icomWrapper}>
            <FontAwesome  style={styles.icon} name="search" size={22} color={colors.grey} />
            </View>
            <View style={styles.inputWrapper}>
                    <TextInput  placeholder={"Search"} value={text} onChangeText={(text)=>handleText(text)} style={styles.input}  />
            </View>
        </View>
    )
}

export default SearchBox
const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      padding:10
      },
      icomWrapper:{
          display: 'flex',
          flex:1,
      },
      inputWrapper:{
          flex:7
      },
      input:{
          height:40
      },
      icon:{
          padding:5,
      }
    
 }) 
