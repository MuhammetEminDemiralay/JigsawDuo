import React, { useEffect } from 'react'
import { Button, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getPuzzleByPuzzleId } from '../../../redux/fileSlice'

const PieceDetailScreen = () => {

    const { params } = useRoute();
    const dispatch: any = useDispatch()
    const { puzzlePiece } = useSelector((state: any) => state.file)

    useEffect(() => {
        console.log("PİECE DETAİL", params);

        dispatch(getPuzzleByPuzzleId(params))
    }, [params])




    return (
        <View style={styles.mainContainer}>
            <FlatList
                ListHeaderComponent={() => (
                    <Text style={styles.text}>Pieces</Text>
                )}
                ListHeaderComponentStyle={styles.header}
                data={puzzlePiece}
                renderItem={({ item, index }) => (
                    <Pressable
                        style={styles.puzzleBox}
                    >
                        {
                            puzzlePiece &&
                            <Image style={styles.image} source={{ uri: item.uri }} />
                        }
                    </Pressable>
                )}
                contentContainerStyle={styles.container}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                numColumns={4}
            />
        </View>
    )
}

export default PieceDetailScreen
