import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {

  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
       <Stack.Screen name="Login" component={Login} />      
    </Stack.Navigator>

  )
}

export default AuthStack