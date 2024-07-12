import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useState } from 'react'
import { AdminScreen, CategoryScreen, DailyScreen, HomeScreen, SpecialScreen } from '../screen';
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

    const [color, setColor] = useState<any>('home')


    return (
        <Stack.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: height * 0.075,
                },
                tabBarActiveBackgroundColor: '#d81159',
            }}
        >
            <Stack.Screen
                name='home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <Entypo name="home"
                            size={32}
                            color={color == 'home' ? '#fff' : 'black'}
                        />
                    ),
                }}
                listeners={{
                    tabPress: () => {
                        setColor('home')
                    }
                }}
            />
            <Stack.Screen
                name='special'
                component={SpecialScreen}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="puzzle-star" size={32}
                            color={color == 'special' ? '#fff' : 'black'} />
                    )
                }}
                listeners={{
                    tabPress: () => {
                        setColor('special')
                    }
                }}
            />
            <Stack.Screen
                name='daily'
                component={DailyScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome
                                name="calendar-o" size={32}
                                color={color == 'daily' ? '#fff' : 'black'}
                            />
                            <Text
                                style={{ position: 'absolute', fontWeight: '700', fontSize: 16, top: '26%', color: color == 'daily' ? '#fff' : 'black' }}
                            >
                                {date}
                            </Text>
                        </View>
                    )
                }}
                listeners={{
                    tabPress: () => {
                        setColor('daily')
                    }
                }}
            />
            < Stack.Screen
                name='category'
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ }) => (
                        <FontAwesome6
                            name="layer-group" size={32}
                            color={color == 'category' ? '#fff' : 'black'} />
                    )
                }}
                listeners={{
                    tabPress: () => {
                        setColor('category')
                    }
                }}
            />
            {/* {
                uid != 'nN21vUxEIcMuHXtY3NHXPW3TaCx1' || uid != 'fSEdJYIHwWhezm0jfKHwjZWtLfD3' &&
                <Stack.Screen
                    name='myPuzzle'
                    component={MyPuzzleScreen}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome
                                name="user" size={35}
                                color={color == 'myPuzzle' ? '#fff' : 'black'}
                            />
                        )
                    }}
                    listeners={{
                        tabPress: () => {
                            setColor('myPuzzle')
                        }
                    }}
                />
            } */}

            {
                uid == 'nN21vUxEIcMuHXtY3NHXPW3TaCx1' &&
                < Stack.Screen
                    name='admin'
                    component={AdminScreen}
                    options={{
                        tabBarIcon: ({ }) => (
                            <MaterialIcons
                                name="admin-panel-settings" size={35}
                                color={color == 'admin' ? '#fff' : 'black'}
                            />
                        )
                    }}
                    listeners={{
                        tabPress: () => {
                            setColor('admin')
                        }
                    }}
                />
            }
            {
                uid == 'fSEdJYIHwWhezm0jfKHwjZWtLfD3' &&
                < Stack.Screen
                    name='admin'
                    component={AdminScreen}
                    options={{
                        tabBarIcon: ({ }) => (
                            <MaterialIcons
                                name="admin-panel-settings" size={35}
                                color={color == 'admin' ? '#fff' : 'black'}
                            />
                        )
                    }}
                    listeners={{
                        tabPress: () => {
                            setColor('admin')
                        }
                    }}
                />
            }
        </Stack.Navigator >
    )
}

export default UserStack
