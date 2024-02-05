import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/home'
import Login from './screens/login'
import Register from './screens/signup'

const Stack = createStackNavigator ()

const Route = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Login'
        //screenOptions={{headerShown: false}}
        >
            {/* <Stack.Screen name='Home' component={Home} /> */}
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route