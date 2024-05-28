import { Alert, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colorConstants } from '../../utils/constants'
import { CustomButton, CustomHeader, CustomInput } from '../../customs'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/reducers'

const CreateGroup = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [nameGroup,setNameGroup] = useState("")
    const [modalState,setModalState] = useState(0)
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const groupName = useSelector((state) => state.reducers.groupName) || []

    const id = props?.route?.params?.id
    const item = props?.route?.params?.item

    useEffect(() => {
      if (id==="contact") {
        setModalVisible(true)
        setModalState(1)
      }
    }, [id])
    

    const handleSelect = ()=>{
        navigation.navigate("Contacts",{nameGroup:nameGroup});
        setModalVisible(false)
    }

    const handleCreateGroup = ()=>{
        dispatch(actions.setGroupName([...groupName, item]));
        setModalVisible(false)
        setModalState(0)
        setNameGroup("")
    }

    const renderItem = ({item,index})=>{
        return(
            <View key={index}>
                <View style={styles.card}>
                    <Text style={styles.text2}>{item.nameGroup}</Text>
                    <Text style={styles.text2}>{item.members}</Text>
                </View>
            </View>
        )
    }

  return (
    <View style={styles.main}>
      <CustomHeader
      title="Groups"
      onPress={()=>setModalVisible(true)}
      />
      {
        groupName
        ?
        <FlatList
        data={groupName}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        />
      :
      <CustomButton
      title="Create Group"
      style={styles.createBtn}
      onPress={()=>setModalVisible(true)}
      />
}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container1}>
            <View style={styles.container2}>
            <View style={styles.container3}>
                {
                    modalState===0
                    ?
                <TextInput style={styles.txtInp}
                placeholder='Enter Group Name'
                value={nameGroup}
                onChangeText={(txt)=>setNameGroup(txt)}
                />
                :
                <View style={styles.groupContainer}>
                    <Text style={styles.text1}>{item?.nameGroup}</Text>
                    <Text style={styles.text1}>{item?.members}</Text>
                </View>
    }
    {
        modalState===0
        ?
                <Pressable style={styles.btn} onPress={handleSelect}>
                    <Text style={styles.btnText}>Select Contacts</Text>
                </Pressable>
                :
                <Pressable style={styles.btn} onPress={handleCreateGroup}>
                    <Text style={styles.btnText}>Create Group</Text>
                </Pressable>
    }
            </View>
                <Text style={styles.logouttext} onPress={()=>dispatch(actions.setIntroStatus("auth"))}>LogOut</Text>
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default CreateGroup

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:colorConstants.background
    },
    container1:{
        flex:1,
    },
    container2:{
        width:"100%",
        height:"50%",
        backgroundColor:colorConstants.theme,
        position:"absolute",
        bottom:0,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        justifyContent:"center"
    },
    container3:{
        width:"80%",
        alignSelf:"center"
    },
    txtInp:{
        width:"100%",
        height:50,
        backgroundColor:colorConstants.background,
        borderRadius:8,
        marginBottom:50
    },
    btn:{
        width:"100%",
        height:50,
        backgroundColor:colorConstants.background,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    },
    btnText:{
        color:colorConstants.theme,
        fontSize:16
    },
    logouttext:{
        color:colorConstants.red2,
        fontSize:16,
        alignSelf:"center",
        marginTop:50
    },
    groupContainer:{
        width:"100%",
        backgroundColor:colorConstants.background,
        borderRadius:8,
        marginBottom:50
    },
    text1:{
        color:colorConstants.theme,
        fontSize:14,
        marginLeft:5
    },
    createBtn:{
        alignSelf:"center",
        marginTop:200
    },
    card:{
        width:"90%",
        backgroundColor:colorConstants.theme,
        borderRadius:8,
        alignSelf:"center",
        marginVertical:10
    },
    text2:{
        color:colorConstants.background,
        fontSize:14,
        marginLeft:5
    },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
      },
      contentContainer: {
        flex: 1,
        alignItems: 'center',
      },
})