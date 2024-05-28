import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateGroup from '../screens/creategroup/CreateGroup';
import Contacts from '../screens/contacts/Contacts';

const Stack = createNativeStackNavigator();

const MainStack = (props) => {

  return (
    <Stack.Navigator initialRouteName='CreateGroup' screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
       <Stack.Screen name="Contacts" component={Contacts} />     
    </Stack.Navigator>

  )
}

export default MainStack