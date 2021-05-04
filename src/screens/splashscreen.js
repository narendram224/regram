import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

function SplashScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../assets/images/instagramlogo.png')} />
            </View>
            <View style={styles.logoContainer}>
                    <Text style={styles.from}>from</Text>
                    <View style={styles.faceBookLogo} >
                        <Image style={styles.logo} source={require('../assets/images/face.jpeg')} />
                    </View>
            </View>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%"
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
      },
      iconContainer:{
          display:"flex",
          flex:1,
          justifyContent:"flex-end",
          alignItems:"center"
      },
      logoContainer:{
        display:"flex",
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        marginBottom:30,
    },
    icon:{
        width:100,
        height:100
    },
    faceBookLogo:{
        width:"45%",
        height:22
    },
    logo:{
        flex:1,
        width:undefined
    },
    from:{
        marginBottom:15,
        color:"grey"
    }
 })
