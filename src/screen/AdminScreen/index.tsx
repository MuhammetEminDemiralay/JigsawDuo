import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MainScreen from './MainScreen'
import OptionScreen from './OptionScreen'
import ImageScreen from './ImageScreen'

const AdminScreen = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='main' component={MainScreen} />
            <Stack.Screen name='option' component={OptionScreen} />
            <Stack.Screen name='image' component={ImageScreen} />
        </Stack.Navigator>
    )
}

export default AdminScreen
