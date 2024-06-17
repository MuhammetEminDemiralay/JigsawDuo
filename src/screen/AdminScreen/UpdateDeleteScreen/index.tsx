import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getPuzzlesByCategory, puzzleCategory } from '../../../redux/fileSlice'

const { width, height } = Dimensions.get("window")

const UpdateDeleteScreen = () => {

  const { params } = useRoute();
  const dispatch: any = useDispatch();
  const { downloadData, category } = useSelector((state: any) => state.file)
  const navigation: any = useNavigation();

  useEffect(() => {
    dispatch(getPuzzlesByCategory(params))
    dispatch(puzzleCategory(params))
  }, [params])

  console.log(category);


  return (
    <View style={styles.container}>
      <FlatList
        data={downloadData}
        ListHeaderComponent={() => (
          <View >
            <Text style={styles.text}>{category}</Text>
          </View>
        )}
        ListHeaderComponentStyle={styles.header}
        renderItem={({ item, index }) => (
          <Pressable
            style={styles.imageBox}
            onPress={() => navigation.navigate('puzzleDetail', { puzzle: item, category: category })}
          >
            <Image style={styles.image} key={index} source={{ uri: item.downloadData }} />
          </Pressable>
        )}

        contentContainerStyle={{ width: width * 0.9, minHeight: height * 0.925 }}
        columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: width * 0.025 }}
        showsVerticalScrollIndicator={false}
        numColumns={2}

      />
    </View>
  )
}

export default UpdateDeleteScreen
