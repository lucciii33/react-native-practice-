import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Info from '../screens/Info';


const Stack = createNativeStackNavigator();

 const HomeStack=()=>{
 return ( 
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
             <Stack.Screen
             name="Home"
             component={Home}
             /> 
             <Stack.Screen
             name="Profile"
             component={Profile}
             /> 
              <Stack.Screen
             name="Info"
             component={Info}
             /> 
        </Stack.Navigator>
    </NavigationContainer>
 )
}

export default HomeStack