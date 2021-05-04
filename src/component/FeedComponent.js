import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
function FeedComponent(){
    return (
        <View style={styles.container}>
            <View style={styles.headerwrapper}>
                <View style={styles.headerLeftWrapper}>
                    <Image style={styles.profileThumb} source={require('../assets/images/insta.png')} />
                    <Text style={styles.headerTitle}>Caterine</Text>
                </View>
                <View>
                <MaterialCommunityIcons style={styles.icon} name="dots-vertical" size={24} color="black" />
                </View>
                <View>
                <Image style={styles.feedImage} source={require('../assets/images/insta.png')} />
                    
                </View>
                {/* <View style={styles.feedFooter}>
                <MaterialCommunityIcons style={styles.icon}  name="heart-outline" size={24} color="black" />
                <MaterialCommunityIcons style={styles.icon} name="send" size={24} color="black" />
                <MaterialCommunityIcons style={styles.icon} name="comment-outline" size={24} color="black" />
                <MaterialCommunityIcons style={styles.icon} name="bookmark-outline" size={24} color="black" />
                    
                </View> */}
            </View>
        </View>
    )
}

export default FeedComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      profileThumb:{
        width:50,
        height:50,
        borderRadius:50
       
      },
      headerwrapper:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
      },
      icon:{
          width:50,
          height:40,
          opacity:0.5
      },
      headerLeftWrapper:{
          flexDirection:"row",
          alignItems:"center"
      },
      headerTitle:{
          fontSize:18,
          fontWeight:'700',
      },
      feedImage:{
          width:"100%"
      } ,
      feedFooter:{
          flexDirection:"row"
      }
 })
