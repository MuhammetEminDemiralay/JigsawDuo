import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useState } from 'react'
import { AdminScreen, CategoryScreen, DailyScreen, HomeScreen, MyPuzzleScreen, SpecialScreen } from '../screen';
import { MaterialIcons, Entypo, FontAwesome5, MaterialCommunityIcons, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Dimensions, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


const { width, height } = Dimensions.get("window")

const UserStack = () => {

    const Stack = createBottomTabNavigator();
    const { uid } = useSelector((state: any) => state.auth)
    const [date, setDate] = useState<any>();

    useEffect(() => {
        const date = new Date().getDate();
        setDate(date);
    }, [])



    return (
        <Stack.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: height * 0.075,
                },
                tabBarActiveBackgroundColor: '#ff9500'
            }}
        >
            <Stack.Screen
                name='home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <Entypo name="home" size={32} color="black" />
                    )
                }}
            />
            <Stack.Screen
                name='special'
                component={SpecialScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="puzzle-star" size={32} color="black" />
                    )
                }}
            />
            <Stack.Screen
                name='daily'
                component={DailyScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <View style={{ padding: 4 }}>
                            <FontAwesome name="calendar-o" size={35} color="black" />
                            <Text style={{ position: 'absolute', top: '42%', left: '22%', fontWeight: '700', fontSize: 16 }}>{date}</Text>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name='category'
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <FontAwesome6 name="layer-group" size={32} color="black" />)
                }}
            />
            {
                uid != 'nN21vUxEIcMuHXtY3NHXPW3TaCx1' &&
                <Stack.Screen
                    name='myPuzzle'
                    component={MyPuzzleScreen}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome name="user" size={32} color="black" />
                        )
                    }}
                />
            }
            {
                uid == 'nN21vUxEIcMuHXtY3NHXPW3TaCx1' &&
                <Stack.Screen
                    name='admin'
                    component={AdminScreen}
                    options={{
                        tabBarIcon: ({ }) => (
                            <MaterialIcons name="admin-panel-settings" size={32} color="black" />
                        )
                    }}
                />
            }
        </Stack.Navigator>
    )
}

export default UserStack
