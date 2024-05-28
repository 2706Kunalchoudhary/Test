import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorConstants, images } from '../utils/constants'

export const CustomHeader2 = (props) => {
  return (
    <View style={styles.container1}>
        <View style={styles.container01}>
      <Text style={styles.text1}>{props.title}</Text>
      <Pressable style={styles.container2} onPress={props.onPress}>
      {/* <Image source={images.Add} style={styles.image1}/> */}
      </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container1:{
        width:"100%",
        height:50,
        backgroundColor:colorConstants.theme,
        
    },
    container01:{
        width:"90%",
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text1:{
        color:colorConstants.background,
        fontSize:16
    },
    container2:{
        width:"10%",
        height:50,
        justifyContent:"center",
        alignItems:"center"
    },
    image1:{
        width:30,
        height:30
    }
})