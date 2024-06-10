import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './userStack';
import AuthStack from './authStack';
import { StatusBar } from 'expo-status-bar';

const RootNavigation = () => {

    const isAuth = true;

    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            {
                isAuth ? <UserStack /> : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default RootNavigation
