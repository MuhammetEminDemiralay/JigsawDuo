import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, LayoutChangeEvent, View } from 'react-native'
import { styles } from './styles'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { getGamePuzzlePieces, setGameMode } from '../../redux/fileSlice';
import { GestureHandlerRootView, HandlerStateChangeEvent, PanGestureHandler, PanGestureHandlerEventPayload, PanGestureHandlerGestureEvent, PanGestureHandlerProperties } from 'react-native-gesture-handler';


const GameScreen = () => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
    const dispatch: any = useDispatch();
    const { gamePuzzlePieces } = useSelector((state: any) => state.file)

    useEffect(() => {
        dispatch(getGamePuzzlePieces(null))
    }, [])

    const closeGame = () => {
        dispatch(setGameMode(false))
    }


    const [translateX, setTranslateX] = useState<any>()
    const [translateY, setTranslateY] = useState<any>()

    const handleGesture = (event: PanGestureHandlerGestureEvent) => {
        const { x, y } = event.nativeEvent
        setTranslateX(x)
        setTranslateX(y)

        console.log(x);
        
    }

 

    return (
        <GestureHandlerRootView style={styles.container}>

            <View style={styles.banner}>

            </View>

            <AntDesign
                style={{ position: 'absolute', right: 20, top: 20 }}
                name="closecircle" size={30} color="black"
                onPress={closeGame}
            />
            <View style={styles.topBox}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <View style={styles.pieceColumnWrapper}>

                            {/* < Image style={styles.image} key={index} source={require(`./image/1.png`)} />
                             */}
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.pieceListContainer}
                />
            </View>

            <View style={styles.mainBox}>
                <View style={styles.arena}>

                </View>
            </View>

            <View style={styles.bottomBox}>
                <FlatList
                    data={gamePuzzlePieces}

                    renderItem={({ item, index }) => (
                        <View
                            style={styles.pieceColumnWrapper}
                        >
                            {
                                <PanGestureHandler
                                    onGestureEvent={handleGesture}
                                >
                                    < Image
                                        style={styles.image}
                                        key={index}
                                        source={{ uri: item }}
                                    />
                                </PanGestureHandler>
                            }
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.pieceListContainer}
                />
            </View>

            <View style={styles.banner}>

            </View>

        </GestureHandlerRootView>
    )
}

export default GameScreen
