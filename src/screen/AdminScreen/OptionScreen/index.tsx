import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, Image, Platform, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get("window")

const OptionScreen = () => {

  const { params } = useRoute()
  const [category, setCategory] = useState<any>()
  const data = ['main', '36', '64', '100', '144', '225', '400']
  const navigation: any = useNavigation();
  const { mainSize, oneSize, twoSize, threeSize, fourSize, fiveSize, sixSize } = useSelector((state: any) => state.file)

  useEffect(() => {

    setCategory(params)
  }, [])

  useEffect(() => {
    console.log("s");

  }, [mainSize, oneSize, twoSize, threeSize, fourSize, fiveSize, sixSize])

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <View>
          </View>
        )}
        ListHeaderComponentStyle={styles.header}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => navigation.navigate('image', { category: category, option: item })} style={styles.btn} key={index}>
            <FontAwesome style={styles.icon} name="folder" size={width * 0.25}
              color={
                item == 'main' && mainSize == 1 ? '#38b000' :
                  item == 'one' && oneSize == 36 ? '#38b000' :
                    item == 'two' && twoSize == 64 ? '#38b000' :
                      item == 'three' && threeSize == 100 ? '#38b000' :
                        item == 'four' && fourSize == 144 ? '#38b000' :
                          item == 'five' && fiveSize == 225 ? '#38b000' :
                            item == 'six' && sixSize == 400 ? '#38b000' : '#fff'
              }
            />
            <Text style={styles.text}>
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
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default OptionScreen
