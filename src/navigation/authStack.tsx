import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LoginScreen } from '../screen'

const AuthStack = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='login'
                component={LoginScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack
