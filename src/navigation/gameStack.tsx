import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LoginScreen } from '../screen'
import GameScreen from '../screen/GameScreen'

const GameStack = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='game'
                component={GameScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default GameStack
