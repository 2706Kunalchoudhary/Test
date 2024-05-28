import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorConstants } from '../utils/constants'

export const CustomButton = (props) => {
  return (
    <Pressable style={[styles.container1,props.style]} onPress={props.onPress}>
      <Text style={styles.text1}>{props.title}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    container1:{
        width:"30%",
        height:40,
        borderRadius:8,
        backgroundColor:colorConstants.theme,
        justifyContent:"center",
        alignItems:"center"
    },
    text1:{
        color:colorConstants.background,
        fontSize:16,
    }
})