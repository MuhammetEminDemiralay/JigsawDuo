import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { logout } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'

const MyPuzzleScreen = () => {

  const dispatch: any = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(logout())} style={styles.btnBox}>
        <Text style={styles.btnText}>Çıkış yap</Text>
      </Pressable>
    </View>
  )
}

export default MyPuzzleScreen
