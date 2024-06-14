import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './userStack';
import AuthStack from './authStack';
import { StatusBar } from 'expo-status-bar';
import GameStack from './gameStack';

const RootNavigation = () => {

    const isAuth = true;
    const gameMode = false;

    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            {
                !isAuth ? <AuthStack /> : !gameMode ? <UserStack /> : <GameStack />
            }
        </NavigationContainer>
    )
}

export default RootNavigation
