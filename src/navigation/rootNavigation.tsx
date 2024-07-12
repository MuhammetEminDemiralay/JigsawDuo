import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './userStack';
import AuthStack from './authStack';
import { StatusBar } from 'expo-status-bar';
import GameStack from './gameStack';
import { useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const RootNavigation = () => {

    const { isAuth } = useSelector((state: any) => state.auth)
    const { gameMode } = useSelector((state: any) => state.file)
    useEffect(() => {
        SplashScreen.hide()
    }, [])

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
