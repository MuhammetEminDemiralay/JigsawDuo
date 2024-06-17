import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';


const { width, height } = Dimensions.get("window")

const PuzzleDetailScreen = () => {

    const { params } = useRoute()
    const data = ['main', '36', '64', '100', '144', '225', '400']
    const navigation: any = useNavigation();
    const [detailInfo, setDetailInfo] = useState<any>();

    useEffect(() => {
        setDetailInfo(params)
    }, [params])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageBox}>
                {
                    detailInfo &&
                    <Image style={styles.image} source={{ uri: detailInfo?.puzzle?.downloadData }} />
                }
            </View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <Pressable
                        style={styles.folderBtn} key={index}
                        onPress={() => navigation.navigate('pieceDetail', { detailInfo, item })}
                    >
                        <Ionicons style={styles.icon} name="folder" size={width * 0.26} color='#333533' />
                        <Text style={[{ marginTop: 20 }, styles.text]}>{item}</Text>
                    </Pressable>
                )}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default PuzzleDetailScreen
