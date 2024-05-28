import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomInput } from '../../customs'
import { colorConstants } from '../../utils/constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/reducers'
import toastShow from '../../utils/Toast'
import LinearGradient from 'react-native-linear-gradient'

const Login = () => {
  const [name, setName] = useState("")
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (name === "") {
      toastShow("Please Enter Your Name", colorConstants.error)
    } else {
      dispatch(actions.setIntroStatus("main"))
    }
  }
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#DCEAF6', '#DEEDF6', '#FFEDCD', '#F5DBC8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 2.3, y: 1 }}
        style={styles.main}
      >
        <View style={styles.container1}>
          <Text style={styles.text1}>Login</Text>
          <CustomInput
            value={name}
            onChangeText={(txt) => setName(txt)}
            style={styles.txtInp}
            placeholder="Username"
          />
          <CustomButton
            style={styles.btn}
            onPress={handleLogin}
            title="Login"
          />
        </View>
      </LinearGradient>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor:colorConstants.background,
    justifyContent: "center",
    backgroundColor: "#F5DBC8"
  },
  container1: {
    width: "100%",
    height: "50%",
    alignItems: "center",
  },
  text1: {
    fontSize: 40,
    color: colorConstants.black,
    width: "90%",
    alignSelf: "center",
    fontWeight: "700"
  },
  txtInp:{
    marginTop:15
  },
  btn: {
    width:"90%",
    height:53,
    marginTop: 150,
    backgroundColor:colorConstants.orange,
    borderRadius:50
  },

})