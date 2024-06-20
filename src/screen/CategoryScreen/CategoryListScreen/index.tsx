import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { category } from '../../../data/category'
import { useNavigation } from '@react-navigation/native'

const CategoryListScreen = () => {

  const navigation: any = useNavigation();

  return (
    <View style={styles.mainContainer}>

      <FlatList
        data={category}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => navigation.navigate('categoryDetail', item)} style={styles.btn} key={index}>
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoryListScreen
