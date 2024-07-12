import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import Modal from '../../component/Modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPuzzles } from '../../redux/fileSlice'
import { LinearGradient } from 'expo-linear-gradient'
import SplashScreen from 'react-native-splash-screen'

const { width, height } = Dimensions.get("window")

const HomeScreen = () => {

  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState("");
  const dispatch: any = useDispatch()
  const { allPuzzlesImage } = useSelector((state: any) => state.file)



  useEffect(() => {
    if (allPuzzlesImage.length == 0) {
      dispatch(getAllPuzzles(null))
    }
  }, [])

  return (
    <View
      style={styles.container}>
      {
        !visible ?
          <FlatList
            ListHeaderComponent={() => (
              <View
                style={styles.titleTopBox}
              >
                <View style={styles.titleBottomBox}>
                  <Text style={styles.titleText}>Tüm puzzle'lar</Text>
                </View>
              </View>
            )}

            data={allPuzzlesImage}
            renderItem={({ item, index }) => (
              <Pressable
                style={({ pressed }) => [
                  {
                    transform: [
                      { scale: pressed ? 0.9 : 1 }
                    ]
                  },
                  styles.box]}
                key={index}
                onPress={() => {
                  setVisible(true)
                  setItem(item)
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
