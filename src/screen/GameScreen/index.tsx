import React, { useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { styles } from './styles'

const GameScreen = () => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]


    return (
        <View style={styles.container}>

            <View style={styles.banner}>

            </View>

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
                    data={data}
                    renderItem={({ item, index }) => (
                        <View style={styles.pieceColumnWrapper}>
                            {/* < Image style={styles.image} key={index} source={require(`./image/1.png`)} /> */}
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.pieceListContainer}
                />
            </View>

            <View style={styles.banner}>

            </View>

        </View>
    )
}

export default GameScreen
