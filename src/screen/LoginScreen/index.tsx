import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { useDispatch } from 'react-redux'
import { autoLogin, googleSignin } from '../../redux/authSlice'

const LoginScreen = () => {

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(autoLogin())
  }, [])

  return (
    <LinearGradient
      colors={["#96ffc5", "#0086ff", "#00fff3"]}
      style={styles.container}>
      <Text style={styles.loginText}>HOŞGELDİNİZ</Text>
      <GoogleSigninButton
        style={styles.signingBtn}
        size={GoogleSigninButton.Size.Standard}
        onPress={() => dispatch(googleSignin())}
      />
    </LinearGradient>
  )
}

export default LoginScreen
