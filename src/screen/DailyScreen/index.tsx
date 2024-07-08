import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../component/Modal/modal';
import { getPuzzlesByDaily } from '../../redux/fileSlice';
import { LinearGradient } from 'expo-linear-gradient';

const DailyScreen = () => {

  const dispatch: any = useDispatch();
  const { dailyPuzzle } = useSelector((state: any) => state.file)
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState("");
  const [data, setData] = useState<any>();


  useEffect(() => {
    dispatch(getPuzzlesByDaily(null))
  }, [])


  return (
    <View
      style={styles.mainContainer}
    >
      {
        !visible ?
          <FlatList
            data={dailyPuzzle}
            ListHeaderComponent={() => (
              <View
                style={styles.titleTopBox}
              >
                <View style={styles.titleBottomBox}>
                  <Text style={styles.titleText}>Günlük</Text>
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
                  dailyPuzzle &&
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

export default DailyScreen
