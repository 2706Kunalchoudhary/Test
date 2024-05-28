import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/login/Login'
import RootNavigator from './src/navigations/RootNavigator'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})