 import React, { useState } from 'react'
 import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../config/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
 function PhoneInput(){
     const [state, setstate] = useState("131");

     const handleChnage =(text)=>{
         setstate(text)
         
     }
     return (
         <View style={styles.container}>
            <View style={styles.counterWrapper}>
                <Text style={styles.contry}>IN +91</Text>
            </View>
            <View style={styles.inputWrapper}> 
                <TextInput style={styles.input}  value={state} onChangeText={handleChnage} />
            </View>
            <View style={styles.closeWrapper}>
            <Ionicons name="md-close" size={24} color="black" style={styles.icon} />
            </View>
         </View>
     )
 }
 
 export default PhoneInput;

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         width:"100%",
       flexDirection:"row",
       alignItems:"center",
       borderWidth:1,
    //    backgroundColor:"red",
       padding: 25,
       paddingLeft:10,
       paddingRight:10,
       borderRadius:5,
       borderColor:colors.grey,
       backgroundColor:colors.grey1
       },
       counterWrapper:{
        borderRightWidth:1,
        borderRightColor:colors.black,
        paddingRight:10,
        paddingLeft:0,
        flex:1.2,
        zIndex:0,
        // backgroundColor:"orange",
       },
       inputWrapper:{
            flex:4,
            display:"flex",
            paddingLeft:15,
            zIndex:-1
            
            // backgroundColor:"blue",
            // borderBottomWidth:2,
            // borderBottomColor:"red"
       },
       input:{
        height: 40,
        fontSize: 20
            
       },

       closeWrapper:{
            flex:1,
            // alignItems:"flex-end"
       },
       icon:{
           textAlign:"right"
       },
       contry:{
        fontWeight:'700',
        color:colors.grey
       }


  })
 