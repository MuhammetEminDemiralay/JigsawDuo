import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './userStack';
import AuthStack from './authStack';

const RootNavigation = () => {

    const isAuth = true;

    return (
        <NavigationContainer>
            {
                isAuth ? <UserStack /> : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default RootNavigation
