import React, { useState } from 'react'
import { Button, Image, Platform, Text, View } from 'react-native'
import { styles } from './styles'
import DocumentPicker from 'react-native-document-picker'
import RNFS from 'react-native-fs';
import { useDispatch } from 'react-redux';
import { storage } from '../../../firebaseConfig';
import { ref, uploadString, getBlob, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const AdminScreen = () => {


  const [files, setFiles] = useState<any>('');
  const dispatch: any = useDispatch();



  const selectDirectory = async () => {
    try {

      const { assets, didCancel } = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 100 })



      if (assets) {
        for (let as of assets) {
          let docRef = ref(storage, `file/${as.fileName}`)
          const response = await fetch(`${as.uri}`)
          const blob = await response.blob()

          await uploadBytesResumable(docRef, blob)
          console.log("a");

        }

      }


    } catch (error) {
      console.log("s");

      console.log(error);
    }
  }



  return (
    <View style={styles.container}>
      <Button title='klasör seç' onPress={() => selectDirectory()} />


    </View>
  )
}

export default AdminScreen
