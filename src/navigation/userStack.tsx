import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { AdminScreen, CategoryScreen, DailyScreen, HomeScreen, MyPuzzleScreen, SpecialScreen } from '../screen';
import { MaterialIcons, Entypo, FontAwesome5, MaterialCommunityIcons, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';


const { width, height } = Dimensions.get("window")

const UserStack = () => {

    const Stack = createBottomTabNavigator();
    const { uid } = useSelector((state: any) => state.auth)

    return (
        <Stack.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: height * 0.075,
                },
            }}
        >
            <Stack.Screen
                name='home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <Entypo name="home" size={30} color="black" />
                    )
                }}
            />
            <Stack.Screen
                name='special'
                component={SpecialScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="puzzle-star" size={30} color="black" />
                    )
                }}
            />
            <Stack.Screen
                name='daily'
                component={DailyScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <FontAwesome name="calendar-o" size={30} color="black" />
                    )
                }}
            />
            <Stack.Screen
                name='category'
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <FontAwesome6 name="layer-group" size={30} color="black" />)
                }}
            />
            <Stack.Screen
                name='myPuzzle'
                component={MyPuzzleScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <FontAwesome5 name="user-alt" size={30} color="black" />)
                }}
            />
            {
                uid == 'nN21vUxEIcMuHXtY3NHXPW3TaCx1' &&
                <Stack.Screen
                    name='admin'
                    component={AdminScreen}
                    options={{
                        tabBarIcon: ({ }) => (
                            <MaterialIcons name="admin-panel-settings" size={36} color="black" />
                        )
                    }}
                /> 
            }
        </Stack.Navigator>
    )
}

export default UserStack
