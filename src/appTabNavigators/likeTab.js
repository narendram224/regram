import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function LikeTab(){
    return (
        <View style={styles.container}>
            <Text>like</Text>
        </View>
    )
}

export default LikeTab
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
 })
