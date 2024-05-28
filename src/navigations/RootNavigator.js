import React,{ useState ,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';




const Stack = createNativeStackNavigator();
const RootNavigator =   () => {
    const {introStatus} = useSelector((state)=>state.reducers);
    
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}>
            {
                introStatus == "main" && (
                    <Stack.Screen name="MainStack" component={MainStack} />
                )
            }
             {
                introStatus == "auth" && (
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                )
            }
                
        </Stack.Navigator>
    )
}

export default RootNavigator