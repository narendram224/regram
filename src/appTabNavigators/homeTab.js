import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function HomeTab({navigation,route}){
    // console.log("the navi",navigation);

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="goto detail" onPress={()=>{
                navigation.navigate("detail");
            }}></Button>
        </View>
    )
}

export default HomeTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
 })
