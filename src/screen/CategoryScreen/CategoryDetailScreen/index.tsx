import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getPuzzlesByCategory, puzzleCategory } from '../../../redux/fileSlice';
import Modal from '../../../component/Modal/modal';
import { styles } from './style';

const CategoryDetailScreen = () => {

    const { params } = useRoute();
    const dispatch: any = useDispatch();
    const { downloadData, cacheDownloadData, category } = useSelector((state: any) => state.file)
    const [visible, setVisible] = useState(false);
    const [item, setItem] = useState("");
    const [data, setData] = useState<any>();

    useEffect(() => {

        dispatch(puzzleCategory(params))
        dispatch(getPuzzlesByCategory({ category: params, puzzleType: null }))
    }, [params])

    useEffect(() => {
        cacheDownloadData.forEach((item: any) => {
            if (Object.keys(item)[0] == category) {
                Object.values(item).forEach(item => {
                    setData(item)
                })
            }
        })
    },)


    return (
        <View style={styles.mainContainer}>

            {
                !visible ?
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <Pressable
                                style={styles.box}
                                key={index}
                                onPress={() => {
                                    setVisible(true)
                                    setItem(item)
                                }}
                            >
                                {
                                    downloadData &&
                                    <Image style={styles.imageBox} source={{ uri: item?.downloadData }} />
                                }
                            </Pressable>
                        )}
                        numColumns={2}
                        contentContainerStyle={styles.container}
                        columnWrapperStyle={styles.columnWrapper}
                        showsVerticalScrollIndicator={false}
                    />
                    :
                    <Modal item={item} isVisible={visible} setVisible={setVisible} />
            }
        </View>
    )
}

export default CategoryDetailScreen
