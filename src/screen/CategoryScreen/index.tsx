import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CategoryListScreen from './CategoryListScreen';
import CategoryDetailScreen from './CategoryDetailScreen';

const CategoryScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='categoryList' component={CategoryListScreen} />
            <Stack.Screen name='categoryDetail' component={CategoryDetailScreen} />
        </Stack.Navigator>
    )
}

export default CategoryScreen
