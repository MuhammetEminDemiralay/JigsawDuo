import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import Modal from '../../component/Modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPuzzles, getPuzzlesByCategory } from '../../redux/fileSlice'

const { width, height } = Dimensions.get("window")

const HomeScreen = () => {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState("");
  const dispatch: any = useDispatch()
  const { allPuzzlesImage } = useSelector((state: any) => state.file)


  useEffect(() => {
    dispatch(getAllPuzzles())
  }, [])

  return (
    <View style={styles.container}>

      {
        !visible ?
          <FlatList
            ListHeaderComponent={() => (
              <FlatList
                data={data}
                renderItem={() => (
                  <View style={{ width: width * 0.9, height: width * 0.6, borderWidth: 1, columnGap: 10, borderRadius: 10 }}>
                  </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            )}

            ListHeaderComponentStyle={{ marginBottom: width * 0.025, marginTop: width * 0.1 }}

            data={allPuzzlesImage}
            renderItem={({ item, index }) => (
              <Pressable
                style={[{ width: width * 0.425, height: width * 0.425 }, styles.box]}
                key={index}
                onPress={() => {
                  setVisible(true)
                  setItem(item.downloadData)
                }}
              >
                {
                  allPuzzlesImage &&
                  <Image style={styles.imageBox} source={{ uri: item?.downloadData }} />
                }
              </Pressable>
            )}
            numColumns={2}
            contentContainerStyle={{ width: width * 0.9, minHeight: height * 0.925 }}
            columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: width * 0.025 }}
            showsVerticalScrollIndicator={false}
          />

          :
          <Modal item={item} isVisible={visible} setVisible={setVisible} />
      }

    </View>
  )
}

export default HomeScreen
