import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colorConstants } from '../../utils/constants'
import { CustomButton, CustomHeader2 } from '../../customs'
import { useNavigation } from '@react-navigation/native'
import toastShow from '../../utils/Toast'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/reducers'

const data = ["Kunal", "Nishant", "Gaurav", "Prateek"]


const Contacts = (props) => {
  const [select, setSelect] = useState([])
  const navigation = useNavigation()
  const { nameGroup } = props?.route?.params



  const groupData = {
    nameGroup,
    members: select
  };
  // console.log('Group Data:', groupData);



  const handleSelect = (item) => {
    setSelect((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <View style={styles.container1}>
          <Pressable style={styles.radioBtn} onPress={() => handleSelect(item)}>
            {
              select.includes(item)
              &&
              <View style={styles.selectRadio} />
            }
          </Pressable>
          <Text style={styles.text1}>{item}</Text>
        </View>
      </View>
    )
  }

  const handlePress = () => {
    if (select) {
      navigation.navigate("CreateGroup", { item: groupData, id: "contact" });
    } else {

      toastShow("Please Select Contacts To Add")
    }
  }
  return (
    <View style={styles.main}>
      <CustomHeader2
        title="Contacts"
      />
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

      </View>
      <CustomButton
        title="Select"
        style={styles.btn}
        onPress={handlePress}
      />
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colorConstants.background
  },
  container1: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 5
  },
  radioBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colorConstants.theme,
    justifyContent: "center",
    alignItems: "center"
  },
  selectRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colorConstants.theme
  },
  text1: {
    color: colorConstants.theme,
    fontSize: 16,
    textAlignVertical: "center",
    marginLeft: 10
  },
  btn: {
    alignSelf: "center",
    position: "absolute",
    bottom: 100
  }
})