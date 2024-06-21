import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './userStack';
import AuthStack from './authStack';
import { StatusBar } from 'expo-status-bar';
import GameStack from './gameStack';
import { useSelector } from 'react-redux';

const RootNavigation = () => {

    const isAuth = true;
    const { gameMode } = useSelector((state: any) => state.file)

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
