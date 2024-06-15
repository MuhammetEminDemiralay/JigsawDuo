import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { main0, one36, two64, three100, four144, five225, six400 } from '../../../redux/fileSlice';



const { width, height } = Dimensions.get("window")


const ImageScreen = () => {

  const { params } = useRoute()
  const [option, setOption] = useState<any>()
  const dispatch: any = useDispatch();
  const { main, one, two, three, four, five, six } = useSelector((state: any) => state.file)


  useEffect(() => {
    console.log(params);

    setOption(params)

  }, [])


  const selectDoc = async () => {
    try {

      const { assets } = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 100 })
      if (assets && assets != null) {

        option?.option == 'main' ? dispatch(main0(assets)) :
          option?.option == '36' ? dispatch(one36(assets)) :
            option?.option == '64' ? dispatch(two64(assets)) :
              option?.option == '100' ? dispatch(three100(assets)) :
                option?.option == '144' ? dispatch(four144(assets)) :
                  option?.option == '225' ? dispatch(five225(assets)) :
                    option?.option == '400' ? dispatch(six400(assets)) : null
      }
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={option?.option == 'main' ? main :
          option?.option == '36' ? one :
            option?.option == '64' ? two :
              option?.option == '100' ? three :
                option?.option == '144' ? four :
                  option?.option == '225' ? five :
                    option?.option == '400' ? six : null}
        ListHeaderComponent={() => (
          <>
            <View style={styles.header}>
              <View style={styles.categoryName}>
                <Text style={styles.text}>{option?.category}</Text>
              </View>
              <View style={styles.optionName}>
                <Ionicons style={styles.icon} name="extension-puzzle" size={80} color="#B9F2FF" />
                <Text>{ }</Text>
                <Text style={styles.optionText}>{option?.option}</Text>
              </View>
              <View style={styles.confirmBox}>
                <Pressable style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#2c6e49' : '#70e000'
                  },
                  styles.confirmBtn
                ]} onPress={() => selectDoc()}>
                  <FontAwesome5 name="check" size={40} color="black" />
                </Pressable>
              </View>
            </View>
            <Pressable style={styles.selectDoc} onPress={() => selectDoc()}>
              <Text style={styles.text}>Resim seç</Text>
              <AntDesign name="caretdown" size={24} color="#fff" />
            </Pressable>
          </>
        )}
        renderItem={({ item, index }) => (
          <Pressable style={styles.btn} key={index}>
            {
              option &&
              <Image style={styles.image} source={{ uri: item?.uri }} />
            }
          </Pressable>
        )}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={4}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ImageScreen
