import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {colors} from '../config/color';
import PrimaryBtton from '../component/primaryBtton';
import SearchBox from '../component/searchBox';
const mydata = [{
    id:"15",
    title:"lang1",
    subTitle:"lang 1"
},{
    id:"2",
    title:"lang1",
    subTitle:"lang 1"
},{
    id:"3",
    title:"lang1",
    subTitle:"lang 1"
},{
    id:"4",
    title:"lang1",
    subTitle:"lang 1"
},{
    id:"5",
    title:"lang1",
    subTitle:"lang 1"
},{
    id:"7",
    title:"lang1",
    subTitle:"lang 1"
},{
    id:"6",
    title:"lang1",
    subTitle:"lang 1"
},
]
function InitialLauchScreen(){
    const [langExpand, setlangExpand] = useState(false);
    const toggleDropDown = ()=>{
            setlangExpand((pre)=>!pre);
    }
    return (
      <View style={styles.container}>
        <View style={styles.languageWrapper}>
          <TouchableOpacity onPress={toggleDropDown}>
            <Text style={styles.langText}>
              <Text> English (UK) </Text>
              <FontAwesome
                style={styles.icon}
                name="caret-down"
                size={15}
                backgroundColor={colors.grey}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <Image
            style={styles.instaLogo}
            source={require("../assets/images/insta.png")}
          />
          <PrimaryBtton
            buttonLabel="Create New Account"
            buttonBgColor={colors.primary}
            labelColor={colors.secondary}
          />
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.footerContentWraper}>
            <Text style={styles.from}>From</Text>
            <Text style={styles.facebook}>FACEBOOK</Text>
          </View>
        </View>
        <Modal visible={langExpand} transparent={true}>
          <View
            style={[
              styles.modelContainer,
              langExpand ? { backgroundColor: "rgba(0,0,0,0.5)" } : null,
            ]}
          >
            <View style={styles.modelContentContainer}>
              <View style={styles.titleWrapper}>
                <Text style={styles.titles}>SELECT YOUR LANGUAGE</Text>
              </View>
              <View style={styles.underLine} />
              <View>
                <SearchBox />
              </View>
              <View style={styles.underLine} />

              <FlatList
                data={mydata}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.language}>
                    <Text>{item.title}</Text>
                    <Text style={styles.subLang}>{item.subTitle}</Text>
                  </View>
                )}
              />
            </View>
          </View>
          <TouchableOpacity onPress={toggleDropDown}>
            <Text>Close Model</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
}

export default InitialLauchScreen;
const styles = StyleSheet.create({
    container: {
        display:'flex',
        width:"100%",
        flex: 1,
      },
      languageWrapper:{
flex:1,
justifyContent:"flex-start",
alignItems:"center"
      },
      langText:{
        paddingTop:20,
        color:colors.grey
      },
      icon:{
          display:"flex",
          flex:1,
        alignItems:"flex-end",
        alignSelf:"flex-end"
      },
      buttonWrapper:{
          flex:1,
          justifyContent:"center",
          alignItems:"center"
      },
      footerWrapper:{
          flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
      },
      instaLogo:{
          width:"50%",
          height:"25%"
      },
      footerContentWraper:{
          borderTopColor:"grey",
          borderTopWidth:0.5,
        alignItems:"center",
        padding:10,
        width:"100%"
      },
      from:{
          color:colors.grey
      },
      facebook:{
            fontWeight:"bold"
      },
      modelContainer:{
          display:'flex',
          flex:1
      },
      modelContentContainer:{
          display:"flex",
          flex:1,
          backgroundColor: colors.secondary,
          marginLeft:"10%",
          marginRight:"10%"
      },
      titleWrapper:{
          padding: 10,
      },
      titles:{
          fontSize:18,
          fontWeight:"700"
      },
      underLine:{
          height:0.5,
        backgroundColor:colors.grey1 
          },
          language:{
              marginLeft:15,
              marginBottom:10,

          },
          subLang:{
            color:colors.grey,
            fontSize:12
          }



 })
