import React, { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MainScreen = () => {


  const [files, setFiles] = useState<any>('');
  const dispatch: any = useDispatch();
  const data = ['Hayvan', 'Bitki', 'Eşya', 'Nesne', 'Kuş', 'Böcek']
  const navigation: any = useNavigation();
  const [option, setOption] = useState<string>('add');


  return (
    <FlatList
      data={data}

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
        </>
      )}

      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => navigation.navigate(`${option}`, item)}
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
