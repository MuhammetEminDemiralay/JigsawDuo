import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MainScreen from './MainScreen'
import ImageScreen from './ImageScreen'
import AddScreen from './AddSceren'
import UpdateDeleteScreen from './UpdateDeleteScreen'
import PuzzleDetailScreen from './PuzzleDetailScreen'
import PieceDetailScreen from './PieceDetailScreen'


const AdminScreen = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='main' component={MainScreen} />
            <Stack.Screen name='add' component={AddScreen} />
            <Stack.Screen name='updateDelete' component={UpdateDeleteScreen} />
            <Stack.Screen name='image' component={ImageScreen} />
            <Stack.Screen name='puzzleDetail' component={PuzzleDetailScreen} />
            <Stack.Screen name='pieceDetail' component={PieceDetailScreen} />
        </Stack.Navigator>
    )
}

export default AdminScreen
