import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPuzzlesBySpecial } from '../../redux/fileSlice'
import Modal from '../../component/Modal/modal'
import { Ionicons } from '@expo/vector-icons'
const SpecialScreen = () => {

  const dispatch: any = useDispatch();
  const { speacialPuzzle } = useSelector((state: any) => state.file)
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState("");



  useEffect(() => {
    if (speacialPuzzle.length == 0) {
      dispatch(getPuzzlesBySpecial(null))
    }
  }, [])


  return (
    <View
      style={styles.mainContainer}>
      {
        !visible ?
          <FlatList
            data={speacialPuzzle}
            ListHeaderComponent={() => (
              <View
                style={styles.titleTopBox}
              >
                <View style={styles.titleBottomBox}>
                  <Ionicons name="star" size={16} color="#f7ef8a" />
                  <Ionicons name="star" size={20} color="#f7ef8a" />
                  <Ionicons name="star" size={24} color="#f7ef8a" />
                  <Text style={styles.titleText}>Özel</Text>
                  <Ionicons name="star" size={24} color="#f7ef8a" />
                  <Ionicons name="star" size={20} color="#f7ef8a" />
                  <Ionicons name="star" size={16} color="#f7ef8a" />
                </View>
              </View>
            )}
            renderItem={({ item, index }) => (
              <Pressable
                style={({ pressed }) => [
                  {
                    transform: [
                      { scale: pressed ? 0.9 : 1 }
                    ],
                  }
                  , styles.box
                ]}
                key={index}
                onPress={() => {
                  setVisible(true)
                  setItem(item)
                }}
              >
                {
                  speacialPuzzle &&
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

export default SpecialScreen
