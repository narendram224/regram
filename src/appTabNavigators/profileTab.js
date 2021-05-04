import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ProfileTab(){
    return (
        <View style={styles.container}>
            <Text>profile</Text>
        </View>
    )
}

export default ProfileTab
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
 })
