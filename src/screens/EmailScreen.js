import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/color'
import PrimaryBtton from '../component/primaryBtton'
import PrimaryInput from '../component/PrimaryInput'

function EmailScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Enter Confirmation CODE</Text>
            </View>
            <View style={styles.subHeadingContainer}>
                <Text style={styles.requestText}><Text style={styles.infoText}>Enter the 6 digit code we sent to +914242424 </Text>Request a new one</Text>
            </View>
            <View style={styles.inputContainer}>
                <PrimaryInput placeholder={"Conformation Code"} />
            </View>
            <View style={styles.buttonWrapper}>
            <PrimaryBtton buttonLabel={"Next"} labelColor={colors.secondary} buttonBgColor={colors.primary} />

                {/* <PrimaryBtton buttonBgColor={colors.primary} labelColor={colors.grey1} buttonLabel={"nexts"} /> */}
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.login} ><Text style={styles.alreadyLogin}>Already have an account?</Text>Login</Text>
            </View>
            



        </View>
    )
}

export default EmailScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headingContainer:{
          marginTop:"20%",
          marginBottom:20,
      },
      subHeadingContainer:{
          marginLeft:"20%",
          marginRight:"20%",
      },
      inputContainer:{
          marginHorizontal:"7%",
          marginVertical:"5%",
      height:50,
      padding:5
      },
      buttonWrapper:{
       marginLeft:"5%",
       marginRight:"5%",
       marginTop:0,
       marginBottom:0
        
      },
      heading:{
          textAlign:"center",
          fontWeight:"600",
          textTransform:"capitalize"
      },
      infoText:{
          color:colors.grey
      },
      requestText:{
          color:colors.primary,
          fontWeight:"700"
      },
      bottomContainer:{
   
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
