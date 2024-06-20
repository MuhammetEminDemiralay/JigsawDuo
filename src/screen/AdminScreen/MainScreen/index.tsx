import React, { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { category } from '../../../data/category';


const MainScreen = () => {


  const [files, setFiles] = useState<any>('');
  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();
  const [option, setOption] = useState<string>('add');
  const [puzzleType, setPuzzleType] = useState('genel')



  return (
    <FlatList
      data={category}

      ListHeaderComponent={() => (
        <>
          <View style={[{ marginTop: 50, height: 120 }, styles.header]}>
            <Text style={styles.text}>Kategori</Text>
          </View>
          <View style={[{ marginVertical: 10, height: 80 }, styles.header]}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#ccc5b9' : '#333533'
                },
                styles.selectBox
              ]}
              onPress={() => setOption('add')}
            >
              <MaterialCommunityIcons
                name="puzzle-plus"
                size={option == 'add' ? 50 : 35}
                color={option == 'add' ? '#16db65' : '#fe5f55'}
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#ccc5b9' : '#333533'
                },
                styles.selectBox
              ]}
              onPress={() => setOption('updateDelete')}
            >
              <MaterialCommunityIcons
                name="puzzle-edit"
                size={option == 'updateDelete' ? 50 : 35}
                color={option == 'updateDelete' ? '#16db65' : '#fe5f55'}
              />
              <MaterialCommunityIcons
                name="puzzle-minus"
                size={option == 'updateDelete' ? 50 : 35}
                color={option == 'updateDelete' ? '#16db65' : '#fe5f55'}
              />
            </Pressable>
          </View>
          <View style={[{ height: 60, marginBottom: 25 }, styles.header]}>
            <Text style={styles.text}>
              {
                option == 'add' ? 'Puzzle ekle' : 'Puzzle sil veya güncelle'
              }
            </Text>
          </View>
          <View style={[{ height: 60, marginBottom: 25 }, styles.puzzleType]}>
            <Pressable
              style={[
                {
                  backgroundColor: puzzleType == 'genel' ? '#ef233c' : '#333533'
                },
                styles.puzzleTypeBtn]}
              onPress={() => setPuzzleType('genel')}
            >
              <Text style={styles.text}>Genel</Text>
            </Pressable>
            <Pressable
              style={[
                {
                  backgroundColor: puzzleType == 'özel' ? '#ef233c' : '#333533'
                },
                styles.puzzleTypeBtn]}
              onPress={() => setPuzzleType('özel')}
            >
              <Text style={styles.text}>Özel</Text>
            </Pressable>
            <Pressable
              style={[
                {
                  backgroundColor: puzzleType == 'günlük' ? '#ef233c' : '#333533'
                }
                , styles.puzzleTypeBtn]}
              onPress={() => setPuzzleType('günlük')}
            >
              <Text style={styles.text}>Günlük</Text>
            </Pressable>
          </View>
        </>
      )}

      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => navigation.navigate(`${option}`, { category: item, puzzleType: puzzleType })}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#ccc5b9' : '#333533'
            }
            , styles.btn
          ]} key={index}
        >
          <Text style={styles.text}>{item}</Text>
        </Pressable>
      )}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default MainScreen
