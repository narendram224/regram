import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function MediaTab(){
    return (
        <View style={styles.container}>
            <Text>media</Text>
        </View>
    )
}

export default MediaTab
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
 })
