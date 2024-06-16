import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getPuzzlesByCategory, puzzleCategory } from '../../../redux/fileSlice'

const { width, height } = Dimensions.get("window")

const UpdateDeleteScreen = () => {

  const { params } = useRoute();
  const dispatch: any = useDispatch();
  const { downloadData } = useSelector((state: any) => state.file)

  useEffect(() => {
    dispatch(getPuzzlesByCategory(params))
  }, [params])

  return (
    <FlatList
      data={downloadData}
      renderItem={({ item, index }) => (
        <Image style={{ width: width * 0.24, height: 100 }} key={index} source={{ uri: item }} />
      )}
      contentContainerStyle={{ width: width * 1, minHeight: height * 1 }}
      numColumns={4}
    />

  )
}

export default UpdateDeleteScreen
