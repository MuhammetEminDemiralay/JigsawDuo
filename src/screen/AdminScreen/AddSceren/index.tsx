import React, { useEffect, useState } from 'react'
import { Alert, Button, Dimensions, FlatList, Image, Platform, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFile, puzzleCategory } from '../../../redux/fileSlice';


const { width, height } = Dimensions.get("window")

const AddScreen = () => {

  const { params } = useRoute()
  const [category, setCategory] = useState<any>()
  const data = ['main', '36', '64', '100', '144', '225', '400']
  const navigation: any = useNavigation();
  const { mainSize, oneSize, twoSize, threeSize, fourSize, fiveSize, sixSize } = useSelector((state: any) => state.file)
  const dispatch: any = useDispatch();
  const [puzzleType, setPuzzleType] = useState<string>('genel');

  useEffect(() => {
    const { category, puzzleType }: any = params

    setPuzzleType(puzzleType)
    setCategory(category)
    dispatch(puzzleCategory(category))
  }, [])

  useEffect(() => {
  }, [mainSize, oneSize, twoSize, threeSize, fourSize, fiveSize, sixSize])


  const addPuzzle = async () => {
    if (
      true
      // mainSize == 1 && oneSize 
      // && 36 && twoSize == 64 && threeSize == 100 && fourSize == 144
      //  && fiveSize == 225 && sixSize == 400
    ) {
      await dispatch(addFile(puzzleType))
      Alert.alert("Puzzle oluşturuluyor")
    } else {
      Alert.alert("Eksik parçaları tamamla !!")
    }
  }



  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}

        ListHeaderComponent={() => (
          <Text style={styles.text}>{category}</Text>
        )}
        ListHeaderComponentStyle={styles.header}

        renderItem={({ item, index }) => (
          <Pressable onPress={() => navigation.navigate('image', { category: category, option: item })} style={styles.folderBtn} key={index}>
            <Ionicons style={styles.icon} name="folder" size={width * 0.26}
              color={
                item == 'main' && mainSize == 1 ? '#38b000' :
                  item == '36' && oneSize == 36 ? '#38b000' :
                    item == '64' && twoSize == 64 ? '#38b000' :
                      item == '100' && threeSize == 100 ? '#38b000' :
                        item == '144' && fourSize == 144 ? '#38b000' :
                          item == '225' && fiveSize == 225 ? '#38b000' :
                            item == '400' && sixSize == 400 ? '#38b000' : '#333533'
              }
            />
            <Text style={[{ marginTop: 20 }, styles.text]}>
              {
                item == 'main' ? mainSize :
                  item == '36' ? oneSize :
                    item == '64' ? twoSize :
                      item == '100' ? threeSize :
                        item == '144' ? fourSize :
                          item == '225' ? fiveSize :
                            item == '400' ? sixSize : 0
              }
              / </Text>
            <Text style={[{ marginTop: 20 }, styles.text]}>{item}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={3}
        showsVerticalScrollIndicator={false}

        ListFooterComponent={() => (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#ccc5b9' : '#333533'
              },
              styles.confirmBtn
            ]}
            onPress={() => addPuzzle()}
          >
            <Text style={styles.text}>Puzzle onayla</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default AddScreen
