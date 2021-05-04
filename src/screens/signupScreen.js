import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors } from '../config/color'
import PhoneInput from '../component/phoneInputForm'
import PrimaryBtton from '../component/primaryBtton'

function SignUp(){
    const [isSwitch, setisSwitch] = useState(null);

    const switchButton = (toggle)=>{
        setisSwitch(toggle)
    }
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>

           <View style={styles.avtarContainer}>
                <Image style={styles.avtar} source={require('../assets/images/logocss.png')} /> 
           </View>
           <View style={styles.switchAbleWrapper}>
                <TouchableOpacity onPress={()=>switchButton(true)} style={[styles.titleSwitch,{borderBottomColor:isSwitch?colors.black:colors.grey}]}><Text style={[styles.title,{color:isSwitch?colors.black:colors.grey}]}>Phone</Text></TouchableOpacity>
              
               <TouchableOpacity style={[styles.titleSwitch,{borderBottomColor:!isSwitch?colors.black:colors.grey}]} onPress={()=>switchButton(false)}><Text style={[styles.title,{color:!isSwitch?colors.black:colors.grey}]}>Email </Text></TouchableOpacity>
               </View>
            <View style={styles.phoneNuberWrapper}>
                <PhoneInput /> 
            </View>
            <View style={styles.notifyWrapper}>
                <Text style={styles.notifyText}>You may receive SMS update from instagram and can otp out at any time</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <PrimaryBtton buttonLabel={"Next"} labelColor={colors.secondary} buttonBgColor={colors.primary} />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.login} ><Text style={styles.alreadyLogin}>Already have an account?</Text>Login</Text>
            </View>
            </View>
            
        </View>
    )
}

export default SignUp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%"
      },
      avtarContainer:{
            alignItems:"center",
            marginTop:30
      },
      avtar:{
        width:200,
        height:200
      },
      switchAbleWrapper:{
        flexDirection:'row',
        marginTop:30,
        margin:30
      },
      titleSwitch:{
          flex:1,
          borderBottomColor:colors.black,
          borderBottomWidth:2
      },
      title:{
        textAlign:"center",
        fontWeight:"700",
        paddingBottom:15
        },
        phoneNuberWrapper:{
            margin:30
        },
        notifyWrapper:{
            padding: 30,
            paddingTop:5
        },
        notifyText:{
            color:colors.grey,
            textAlign:"center"
        },
        bottomContainer:{
            // marginLeft:15,
            // marginRight:15,
            marginTop:20,
            borderTopColor:colors.black,
            borderTopWidth:1,
            padding:15
        },
        login:{
            textAlign:"center",
            zIndex:0
        },
        topContainer:{
            flex:1,
        },
        alreadyLogin:{
            color:colors.grey,
            
        },
        


 })
