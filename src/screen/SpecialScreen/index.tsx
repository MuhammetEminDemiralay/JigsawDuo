import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPuzzlesBySpecial } from '../../redux/fileSlice'
import Modal from '../../component/Modal/modal'

const SpecialScreen = () => {

  const dispatch: any = useDispatch();
  const { speacialPuzzle } = useSelector((state: any) => state.file)
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState("");
  const [data, setData] = useState<any>();



  useEffect(() => {
    dispatch(getPuzzlesBySpecial())
  }, [])


  return (
    <View style={styles.mainContainer}>
      {
        !visible ?
          <FlatList
            data={speacialPuzzle}
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
