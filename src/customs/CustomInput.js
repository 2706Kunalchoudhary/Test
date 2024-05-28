import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colorConstants } from '../utils/constants'

export const CustomInput = (props) => {
  return (
    <View style={[styles.container1, props.style]}>
      <TextInput
        style={[styles.textInput, props.txtInp]}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
    width: "90%",
    // alignSelf:"center",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor:colorConstants.background,
    borderRadius: 8,
    paddingHorizontal:20,
    shadowColor: colorConstants.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4,
    elevation: 2
  }
})