import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { category } from '../../../data/category'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { logout } from '../../../redux/authSlice'
import { useDispatch } from 'react-redux'


const CategoryListScreen = () => {

  const navigation: any = useNavigation();
  const dispatch: any = useDispatch();

  return (
    <View
      style={styles.mainContainer}
    >

      <FlatList
        data={category}
        ListHeaderComponent={() => (
          <View
            style={styles.titleTopBox}
          >
            <View style={styles.titleBottomBox}>
              <Text style={styles.titleText}>Kategoriler</Text>
            </View>
          </View>
        )}

        ListFooterComponent={() => (
          <>
            <Pressable onPress={() => dispatch(logout())} style={styles.btnBox}>
              <Text style={styles.btnText}>Çıkış yap</Text>
            </Pressable>
          </>
        )}
        renderItem={({ item, index }) => (
          <>
            <Pressable
              style={[
                styles.btn
              ]}
              key={index}
              onPress={() => navigation.navigate('categoryDetail', item.title)}
            >
              <Image
                style={styles.image}
                source={item.id == 1 ? require("../../../data/categoryImage/1.jpg") :
                  item.id == 2 ? require("../../../data/categoryImage/2.jpg") :
                    item.id == 3 ? require("../../../data/categoryImage/3.jpg") :
                      item.id == 4 ? require("../../../data/categoryImage/4.jpg") :
                        item.id == 5 ? require("../../../data/categoryImage/5.jpg") :
                          item.id == 6 ? require("../../../data/categoryImage/6.jpg") :
                            item.id == 7 ? require("../../../data/categoryImage/7.jpg") :
                              item.id == 8 ? require("../../../data/categoryImage/8.jpg") :
                                item.id == 9 ? require("../../../data/categoryImage/9.jpg") :
                                  item.id == 10 ? require("../../../data/categoryImage/10.jpg") :
                                    item.id == 11 ? require("../../../data/categoryImage/11.jpg") : require("../../../data/categoryImage/1.jpg")} />
            </Pressable>
            {
              item.id != 11 &&
              <>
                <FontAwesome style={styles.leftChain} name="chain" size={20} color="black" />
                <FontAwesome style={styles.rightChain} name="chain" size={20} color="black" />
              </>
            }
          </>
        )}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default CategoryListScreen
